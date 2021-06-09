import React from "react";
import { useState, useEffect } from 'react';
import Table from './components/Table/Table';



function App() {
  return (
    <Container />
  );

}

const Container = (props) => {

  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();

    const data = {
      title,
      value
    }
    const url = "https://fnance-app.herokuapp.com/transaction";
    const requestConfig = {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(data)
    }
    function handleSuccessSubmit() {
      document.querySelector('button').textContent = "ENVIADO COM SUCESSO"
    }
    function handleFailedSubmit(error) {
      document.querySelector('button').style.background = "red";
      document.querySelector('button').textContent = "FALHA NO ENVIO DA MENSAGEM";
      console.log(error);
    }

    try {
      const response = await fetch(url, requestConfig);
      if (response.ok) handleSuccessSubmit();
    } catch (error) {
      handleFailedSubmit(error)
    }

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