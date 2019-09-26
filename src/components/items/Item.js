import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const styles = {
  item: { cursor: 'pointer'},
  in_cart: { color: 'red', textDecoration: 'line-through'},
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
};

const Item = ({id, name, price, in_cart, itemClick, remove }) => (
  <div style={styles.flex}>
  <li
  style = { in_cart ? {...styles.item, ...styles.in_cart } : styles.item }
  onClick={ () => itemClick(id) }
  >
    {name}: ${price}
  </li>
  <Button icon size='small' color='white' onClick={() => remove(id)} style={{ marginLeft: "10px", marginTop: '5px' }}>
    <Icon name='trash alternate' color='red'/>
  </Button>
  </div>
);


export default Item;
