import { useState, useEffect } from 'react';
import TableRow from '../TableRow/TableRow';
import './addresses.css';

export default function Users (props) {
  const [list, setList] = useState([]);

  async function fetchData () {
    let url =
      'https://randomuser.me/api/?seed=qadd0004&results=32&nat=au,ca,nz,gb,us';
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    setList(data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className='users-address'>
      <thead>
        <tr>
          <th>User Name</th>
          <th>Street</th>
          <th>City</th>
          <th>State/Province</th>
          <th>Country</th>
          <th>Postal Code</th>
        </tr>
      </thead>
      <tbody>
        <TableRow users={list} />
      </tbody>
    </table>
  );
}
