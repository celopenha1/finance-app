import React from "react";
import { useState, useEffect } from 'react';
import './Table.css';

const Table = (props) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // https://fnance-app.herokuapp.com/transaction

    fetch("http://localhost:3001/transaction")
      .then(res => res.json())
      .then(result => { setIsLoaded(true); setItems(result) })
      .catch(error => { setIsLoaded(false); setError(error) });
  }, []);

  if (error)
    return <div>Error: {error.message}</div>
  else if (!isLoaded)
    return <div>Loading....</div>
  else
    return (
      <table >
        <thead>
          <tr>
            <th>Nº</th>
            <th>Valor</th>
            <th>Título</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item => {
            return (
              <tr >
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td><strong>R$ </strong>{item.value}</td>
              </tr>
            )
          }))}

        </tbody>


      </table>
    )
}

export default Table;