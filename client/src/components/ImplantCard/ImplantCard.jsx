import { MdDeleteForever } from "react-icons/md";
import './implantCard.css';

function ImplantCard({ implantName, diameter, length, REF, LOT, date, onDelete }) {
  return (
    <>
      <tr className="implantCard">
        <td className="implantCard-actions">
          <div><MdDeleteForever className="icon" onClick={onDelete} /></div>
          <div>{implantName}</div>    
        </td>
        <td>{diameter}</td>
        <td>{length}</td>
        <td>{REF}</td>
        <td>{LOT}</td>
        <td>{date}</td>
      </tr>
    </>
  );
}

export default ImplantCard;