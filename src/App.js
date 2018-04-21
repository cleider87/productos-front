import React, { Component } from 'react';
import Productos from './components/productos.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)

      this.state={
          processing: false,
          products_list: [{nombre:"",marca:""}]
      }

      this._getList=_=>{
        fetch('/api/products').then(resp=>resp.json())
                              .then(list=>this.setState({products_list: list}))
                              .catch(e=>console.log(e))

        console.log(this.state.products_list);
      }

      this._getList()

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stock de Productos</h1>
        </header>
        <div className="product-list">
          <Productos listado= {this.state.products_list}/>
        </div>
      </div>
    );
  }
}

export default App;
