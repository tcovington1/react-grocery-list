import React, { Component } from 'react'
import List from './components/items/List'
import ItemForm from './components/items/ItemForm'
import Header from './components/items/Header'

class App extends Component {

  state = {
    items: [
      { id: 1, name: 'Cereal', price: 2, in_cart: true },
      { id: 2, name: 'Milk', price: 4, in_cart: true },
      { id: 3, name: 'Bread', price: 10, in_cart: false }
    ]
  };

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem = (name) => {
    const {items} = this.state;
    const item = {name, id: this.getUniqId() , complete: false}
    this.setState({ items: [item, ...items]});
  }

handleClick = (id) => {
  const { items } = this.state;
  this.setState({
    items: items.map( item => {
      if (item.id === id){
        return {
          ...item,
          in_cart: !item.in_cart
        }
      }
      return item
    })
  })
}



  render() {
    const { items } = this.state;

    return(
      <div>
        <ItemForm addItem={this.addItem} />
        <List name='Grocery List' items={items} price={items.price} itemClick={this.handleClick}/>
      </div>
    );
  }
}


export default App;
