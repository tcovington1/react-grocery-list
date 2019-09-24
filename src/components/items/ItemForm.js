import React, { Component } from 'react';
import styled from 'styled-components';
// import { Form, ButtonToolbar, Button } from 'react-bootstrap';

const Button = styled.button`
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 5px;

  :hover {
    color: green;
    border: 2px solid green;
  }
`;

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
          placeholder='Add an Item'
          />
        <input
         onChange={this.handleChange}
         required
         placeholder='Price'
         name='price'
         value={price}
         />
       {/* <input type='submit' /> */}
      
       <Button>Submit</Button>
      </form>
    )
  }
}

export default ItemForm;