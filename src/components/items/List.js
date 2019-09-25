import React from 'react';
import Item from './Item'

const List = ({ items, name, price, itemClick, remove }) => (
  <div>
    <h2>{name}: {price}</h2>
    <ul>
      { items.map( item => <Item key={item.id} {...item} itemClick={itemClick} remove={remove} />)}
    </ul>
  </div>
);

export default List;