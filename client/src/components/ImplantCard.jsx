import './implantCard.css';

function ImplantCard({ implant }) {
  return (
    <tr>
      <td>{implant.name}</td>
      <td>{implant.diameter}</td>
      <td>{implant.length}</td>
      <td>{implant.REF}</td>
      <td>{implant.LOT}</td>
      <td>{implant.addedAt || implant.usedAt}</td>
    </tr>
  )
}

export default ImplantCard;