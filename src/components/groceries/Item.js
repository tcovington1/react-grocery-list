import React from 'react';

const styles = {
  item: {
    cursor: 'pointer',
  },
  in_cart: {
    color: 'grey',
    textDecoration: 'line-through',
  }
}

const Item = ({ id, name, price, in_cart, itemClick }) => (
  <li
    style={ in_cart ? { ...styles.item, ...styles.in_cart } : styles.item }
    onClick={ () => itemClick(id) }
  >
    {name}: {price}
  </li>
)

export default Item;