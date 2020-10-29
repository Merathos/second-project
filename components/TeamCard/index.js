import { useState } from 'react';
import Link from 'next/link';
import { Section, H3, StyledText, ArrowRight, Picture } from './styles';

const TeamCard = props => {
  const [hover, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const {
    data: { name, slug, summary, image },
    isMain = false,
  } = props;

  return (
    <Link href={`teams/projects/${slug}`}>
      <Section
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setActive(false);
        }}
        onMouseDown={() => setActive(true)}
        onMouseUp={() => setActive(false)}
        isMain={isMain}
      >
        <Picture src={image && image.path.normal} alt={name} />
        <H3 isMain={isMain}>{name}</H3>
        <StyledText isMain={isMain}>{summary}</StyledText>
        <ArrowRight isMain={isMain} hovered={hover} isActive={active} />
      </Section>
    </Link>
  );
};

export default TeamCard;
