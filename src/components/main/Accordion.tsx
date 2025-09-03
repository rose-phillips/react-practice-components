import type { AccordionItem } from "../../utils/types";
import { accordionData } from "../../utils/data";
import { useState } from "react";

function Accordion() {
  const [indexOfOpen, setIndexOfOpen] = useState<number>();

  const toggleHide = (index: number | undefined) => {
    setIndexOfOpen((prev) => (prev === index ? undefined : index));
  };
  return (
    <section className="accordions">
      <h3>Accordions</h3>
      {accordionData.map((item: AccordionItem, index) => (
        <div className="accordion-item" key={item.title}>
          <button
            className="accordion-buttons"
            onClick={() => toggleHide(index)}
          >
            <span>{item.title}</span>
            <span>{indexOfOpen === index ? "-" : "+"}</span>
          </button>
          <div
            id={`content-${index}`}
            className={
              indexOfOpen === index
                ? "accordion-content"
                : "accordion-content hide"
            }
          >
            {item.content}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Accordion;
