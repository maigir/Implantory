import { SlArrowDown, SlArrowUp} from "react-icons/sl";
import { LuDiameter } from "react-icons/lu";
import './accordionCard.css';

function AccordionCard({ type, title, children, isOpen, onToggle }) {
  return (
    <div className="accordionCard">
      <div 
        className="accordionCard-header"
        onClick={onToggle}
      >
        <h3>{title}</h3>
        <span>{isOpen ? <SlArrowUp /> : <SlArrowDown/>}</span>
      </div>

      {isOpen && (
        <div className='accordionCard-content'>
          <div className='implantCard-container'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>{<LuDiameter />}</th>
                  <th>mm</th>
                  <th>REF</th>
                  <th>LOT</th>
                  {type === 'new' ? (
                    <>
                    <th>Added</th>
                    </>
                  ) : (
                    <th>Used</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {children}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionCard;