import React from 'react';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

const Accordion = ({ content }) => {
  return (
    <div className="accordion">
      <div className="accordion__left">
        {content.map((item) => (
          <AccordionItem title={item.title} text={item.text} key={item.key} />
        ))}
      </div>
      <div>
        {content.map((item) => (
          <AccordionItem title={item.title} text={item.text} key={item.key} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
