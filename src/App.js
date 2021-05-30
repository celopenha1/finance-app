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
  const [teste, setTeste] = useState(false);




  const handleSubmit = event => {

    event.preventDefault()

    const data = {
      relevant: title,
      value
    }

    fetch("https://fnance-app.herokuapp.com/transaction", {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }).then(response => { console.log(response); if (response.ok) { setTeste(true) } return response.json(); })
      .then(data => console.log(data))
      .catch(error => console.log(error, 'oi'));

    console.log('oi');




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

      <Table pegadados={teste} />

    </div>
  )
}




export default App