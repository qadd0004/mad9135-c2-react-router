export default function TableRow (props) {
  return props.users.map((item, index) => (
    <tr className='row' key={item.name}>
      <td>
        {item.name.first} {item.name.last}
      </td>
      <td>
        {item.location.street.number} {item.location.street.name}
      </td>
      <td>{item.location.city}</td>
      <td>{item.location.state}</td>
      <td>{item.location.country}</td>
      <td>{item.location.postcode}</td>
    </tr>
  ));
}
