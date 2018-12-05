import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
class App extends Component {

  state = {
    presupuestos:'',
    restante:'',
    gastos: {}
  }

  // Agregar un nuevo gasto al state

  agregarGasto = gasto => {
  // Tomar una copia del state actual
  const gastos = {...this.state.gastos};
  console.log(gastos);
  // Agregar al gasto el objeto del state

  // Ponerlo en state
  }

  render() {
    return (
      <div className="App container">
      <Header
      titulo='Gasto Semanal'
      />
      <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
            <Formulario
             agregarGasto={this.agregarGasto}
            />
          </div>
          <div className="one-half column">
          
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
