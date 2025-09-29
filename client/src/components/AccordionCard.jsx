import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import './accordionCard.css';

function AccordionCard({ title, items = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordionCard">
      <div 
        className="accordionCard-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>
        <span>{isOpen ? <SlArrowUp /> : <SlArrowDown/>}</span>
      </div>

      {isOpen && (
        <div className='accordion-content'>
          {items.length > 0 ? (
            <ul>
              {items.map(implant => {
                <li key={implant.id}>{implant.name}</li>
              })}
            </ul>
          ) : (
            <p>No implants available</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AccordionCard;