import React from 'react';
import { Button } from 'semantic-ui-react';


const Item = ({id, name, price, in_cart, itemClick, remove }) => (
  <div>
  <li
  style = { in_cart ? {...styles.item, ...styles.in_cart } : styles.item }
  onClick={ () => itemClick(id) }
  >
    {name}: ${price}
  </li>
  <Button color='red' onClick={() => remove(id)}>
    Delete
  </Button>
  </div>
);

const styles = {
  item: { cursor: 'pointer'},
  in_cart: { color: 'gray', textDecoration: 'line-through'},
};

export default Item;
