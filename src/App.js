import React from "react";
import { useState, useEffect } from 'react';
import Table from './components/Table/Table';



function App() {


  return (

    <div>
      <Container />
    </div>

  );

}

const Container = (props) => {

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = event => {

    event.preventDefault();

    const data = {
      title,
      value
    }
    // "https://fnance-app.herokuapp.com/transaction"
    fetch("http://localhost:3001/transaction", {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }).then(response => { if (response.ok) { document.querySelector('button').textContent = "ENVIADO COM SUCESSO" } return response.json() })
      .then(data => console.log(data))
      .catch(error => { document.querySelector('button').style.background = "red"; document.querySelector('button').textContent = "NÃO FOI POSSÍVEL SALVAR"; console.log(error) });

  }

  return (
    <div className="container">

      <div className="header">
        <h1>F-<span>nance</span></h1>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="Título">Gasto</label>
          <input required value={title} onChange={event => setTitle(event.target.value)} name="relevant" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="Valor">Valor </label>
          <input required value={value} onChange={event => setValue(event.target.value)} name="value" type="number" />
        </div>
        <button>Enviar</button>
      </form>
      <Table />
    </div>
  )
}




export default App