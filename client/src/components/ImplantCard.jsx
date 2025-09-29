import './implantCard.css';

function ImplantCard({ implant }) {
  return (
    <div className="implantCard-container">
      <tr className="implantCard-data">
        <td>{implant.name}</td>
        <td>{implant.diameter}</td>
        <td>{implant.length}</td>
        <td>{implant.REF}</td>
        <td>{implant.LOT}</td>
        <td>{implant.addedAt || implant.usedAt}</td>
      </tr>
    </div>
  )
}

export default ImplantCard;