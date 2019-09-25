import React from 'react';

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '25px',
  }
}

const filterLink = (current, name, setFilter) => {
  if (current === name )
    return <span>{name}</span>
  else 
    return <span style={styles.link} onClick={() => setFilter(name)}>{name}</span>
}

const Header = ({ filter, setFilter }) => (
  <div>
    { [ 'All', 'Not in Cart', 'In Cart'].map( f => filterLink(filter, f, setFilter))}
  </div>
)

export default Header;