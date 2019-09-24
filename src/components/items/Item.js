import React from 'react';


const Item = ({id, name, price, in_cart, itemClick }) => (
  <li
  style = { in_cart ? {...styles.item, ...styles.in_cart } : styles.item }
  onClick={ () => itemClick(id) }
  >
    {name}: ${price}
  </li>
);

const styles = {
  item: { cursor: 'pointer'},
  in_cart: { color: 'red', textDecoration: 'line-through'},
};

export default Item;
