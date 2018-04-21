import React, { Component } from 'react';

class Productos extends Component {
  render() {
    return (
      <div className="product-list">
        <ul>
        {
          this.props.listado.map((prod,i)=>
            <li key={i}>{prod.nombre} / {prod.marca}</li>
          )
        }
        </ul>
    </div>);
  }
}

export default Productos;
