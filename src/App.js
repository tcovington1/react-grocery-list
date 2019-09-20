import React, { Component } from 'react'

class App extends Component {

  state = {
    items: [
      { id: 1, name: 'Cereal', price: 2, in_cart: true },
      { id: 1, name: 'Milk', price: 4, in_cart: true },
      { id: 1, name: 'Bread', price: 10, in_cart: false }
    ]
  };

  renderItems = () => {
    const { items } = this.state;
    return items.map( item => {
      return (
        <li key={item.id}>{item.name} {item.price}</li>
      )
    })
  }

  render() {
    return(
      <div>
        <ul>
          { this.renderItems() }
        </ul>
      </div>
    );
  }
}


export default App;
