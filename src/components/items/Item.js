import React from 'react';


const Item = ({id, name, in_cart, itemClick }) => (
  <li
  style = { in_cart ? {...styles.item, ...styles.in_cart } : styles.item }
  onClick={ () => itemClick(id) }
  >
    {name}
  </li>
);

const styles = {
  item: { cursor: 'pointer'},
  in_cart: { color: 'gray', textDecoration: 'line-through'},
};

export default Item;
