import React from 'react';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

const Accordion = ({ content }) => {
  return (
    <div className="accordion">
      <div className="accordion__left">
        <AccordionItem title={content.first.title} text={content.first.text} />
        <AccordionItem
          title={content.second.title}
          text={content.second.text}
        />
        <AccordionItem title={content.third.title} text={content.third.text} />
      </div>
      <div>
        <AccordionItem title={content.first.title} text={content.first.text} />
        <AccordionItem
          title={content.second.title}
          text={content.second.text}
        />
        <AccordionItem title={content.third.title} text={content.third.text} />
      </div>
    </div>
  );
};

export default Accordion;
