import { useState } from "react";
import { Accordion } from "react-bootstrap";
import AccordionData from "./Accordion";
import {faqsData}from './faqsData'

const SimpleFaq = () => {
  
  const [active, setActive] = useState(`event-0`);
  return (
    <Accordion defaultActiveKey={active} className="accordion">
      {faqsData.map((faq, i) => (
        <AccordionData
          key={faq.id}
          active={active}
          onClick={() => setActive(`event-${i}`)}
          title={faq.question}
          eventName={`event-${i}`}
          answer={`${faq.answer}`}
        />
      ))}
    </Accordion>
  );
};
export default SimpleFaq;
