import { React, useState } from 'react';
import './Accordion.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSpring, animated } from 'react-spring';

function AccordionItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(0deg)',
      color: '#ffff',
    },
    to: {
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      color: isOpen ? '#000' : '#000',
    },
    config: { duration: '20' },
  });

  const springProps = useSpring({
    height: isOpen ? 100 : 0,
    opacity: isOpen ? 1 : 0,
    config: {
      tension: 300,
      friction: 20,
      mass: 0.5,
      clamp: true,
    },
  });

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion__item">
      <button className="accordion__header" onClick={toggleAccordion}>
        <div className="accordion__title">{title}</div>
        <animated.i style={iconAnimation}>
          <ExpandMoreIcon />
        </animated.i>
      </button>
      <animated.div style={springProps}>
        <p className="accordion__content"> {text}</p>
      </animated.div>
    </div>
  );
}

export default AccordionItem;
