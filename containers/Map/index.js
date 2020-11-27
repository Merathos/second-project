import { Map as Mapcomp, Placemark, YMaps } from 'react-yandex-maps';
import { useEffect, useState, useRef } from 'react';

const Map = ({
  data: { center, markers, zoom, controls, behaviors, routeFrom },
}) => {
  const initialWidth = useWindowWidth();
  const mapRef = useRef(null);

  const handleApiAvaliable = function(ymaps) {
    if (routeFrom) {
      routeFrom.forEach(route => {
        var multiRoute = new ymaps.multiRouter.MultiRoute(
          {
            referencePoints: [
              [route.lat, route.lng],
              [markers[0].coordinates.lat, markers[0].coordinates.lng],
            ],
            params: { results: 1, routingMode: 'pedestrian' },
          },
          {
            pinVisible: false,
            wayPointVisible: false,
            routeActiveMarkerVisible: false,
            routeOpenBalloonOnClick: false,
            routeActiveStrokeWidth: 7,
            routeActivePedestrianSegmentStrokeStyle: 'solid',
            routeActivePedestrianSegmentStrokeColor: route.color,
            opacity: 1,
          }
        );

        mapRef.current.geoObjects.add(multiRoute);
      });
    }
  };

  return (
    <>
      <YMaps
        query={{
          load: 'package.full',
          apikey: 'cf856e76-b8bc-4d46-8e01-396fe94b6909',
        }}
      >
        <Mapcomp
          instanceRef={mapRef}
          onLoad={ymaps => handleApiAvaliable(ymaps)}
          className={'map-container'}
          state={{
            center: [center.lat, center.lng],
            zoom: initialWidth > 768 ? zoom : routeFrom ? zoom - 2 : zoom - 1,
            controls,
            behaviors,
          }}
          options={{ suppressMapOpenBlock: true }}
        >
          {markers?.length > 0 &&
            markers.map(marker => (
              <Placemark
                key={marker.id}
                geometry={[marker.coordinates.lat, marker.coordinates.lng]}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/icons/map-marker.svg',
                  iconImageSize: [43, 60],
                  iconImageOffset: [-21.5, -60],
                }}
              />
            ))}
        </Mapcomp>
      </YMaps>
    </>
  );
};

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowWidth;
}

export default Map;