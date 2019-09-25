import React from 'react';

const styles = {
  item: {
    cursor: 'pointer',
    listStyle: 'circle',
  },
  in_cart: {
    fontStyle: 'italic',
    listStyle: 'disc',
  }
}

const Item = ({ id, name, price, in_cart, itemClick }) => (
  <li
    style={ in_cart ? { ...styles.in_cart } : styles.item }
    onClick={ () => itemClick(id) }
  >
    {name}: {price}
  </li>
)

export default Item;