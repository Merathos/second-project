import { Scrollbars } from 'react-custom-scrollbars';
import { useRef, useState } from 'react';

const CustomScrollbars = ({ children, onModal = false }) => {
  let timer;
  const scrollbar = useRef();
  const [scroll, setScroll] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = (e) => {
    const scrollView = e.target;
    scrollView.classList.add('scroll-view--scrolling');
    clearTimeout(timer);
    timer = setTimeout(() => {
      scrollView.classList.remove('scroll-view--scrolling');
    }, 1200);
  };

  const handleScrollStart = () => {
    if (scrollbar) {
      const { scrollTop } = scrollbar.current.getValues();
      const deltaY = Math.abs(scrollTop - scroll);
      if (deltaY > 10) {
        scrollbar.current.scrollTop(scroll);
      }
    }
  };

  const handleUpdate = () => {
    if (scrollbar) {
      const { scrollTop } = scrollbar.current.getValues();
      setScroll(scrollTop);
    }
  };

  return (
    <Scrollbars
      universal
      autoHide={!onModal && !showScroll}
      onMouseEnter={() => setShowScroll(true)}
      onMouseLeave={() => setShowScroll(false)}
      renderTrackVertical={(props) => (
        <div {...props} className="track-vertical" />
      )}
      renderThumbVertical={(props) => (
        <div {...props} className="thumb-vertical" />
      )}
      renderView={(props) => (
        <div
          {...props}
          className={onModal ? 'scroll-view--scrolling' : 'scroll-view'}
          onScroll={onModal ? () => {} : handleScroll}
        />
      )}
      onUpdate={handleUpdate}
      onScrollStart={handleScrollStart}
      ref={scrollbar}
    >
      {children}
    </Scrollbars>
  );
};

export default CustomScrollbars;
