import React from 'react';
import Item from './Item'

const List = ({ items, name, price, itemClick }) => (
  <div>
    <h2>{name}: {price}</h2>
    <ul>
      { items.map( item => <Item key={item.id} {...item} itemClick={itemClick} />)}
    </ul>
  </div>
);

export default List;