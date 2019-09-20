import React, { Component } from 'react';
import List from './components/groceries/List';
import ItemForm from './components/groceries/ItemForm';
import Header from './components/groceries/Header'

class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Cereal', price: '2', in_cart: true },
      { id: 2, name: 'Milk', price: '4', in_cart: true },
      { id: 3, name: 'Bread', price: '10', in_cart: false }
    ],
    filter: 'All'
  };

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addItem = (item) => {
    const { name, price } = item
    const { items } = this.state
    const newItem = { name, price, in_cart: false, id: this.getUniqId() }
    this.setState({ items: [newItem, ...items] })
  }

  handleClick = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            in_cart: !item.in_cart
          }
        }
        return item
      })
    })
  }

  visibleItems = () => {
    const { items, filter } = this.state
    switch(filter) {
      case 'In Cart':
        return items.filter( t => t.in_cart )
      case 'In Store':
        return items.filter( t => !t.in_cart )
      default:
        return items
    }
  }

  render() {
    const { filter } = this.state
    return(
      <div>
        <Header filter={filter} setFilter={this.setFilter} />
        <ItemForm addItem={this.addItem} />
        <List name="Groceries" items={this.visibleItems()} itemClick={this.handleClick} />
      </div>
    );
  }
}


export default App;
