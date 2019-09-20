import React, { Component } from 'react';

class ItemForm extends Component {
  state = { name: '', price: ''}

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: '', price: '' })
    
  }

  render() {
    const { name, price } = this.state;

    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder='Add an Item'/>
        <input
         onChange={this.handleChange}
         required
         placeholder='Price'
         name='price'
         value={price}
       />
       <input type='submit' />
      </form>
    )
  }
}

export default ItemForm;