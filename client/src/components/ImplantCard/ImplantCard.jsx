import './implantCard.css';

function ImplantCard({ implantName, diameter, length, REF, LOT, date }) {
  return (
    <>
      <tr className="implantCard">
        <td>{implantName}</td>
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