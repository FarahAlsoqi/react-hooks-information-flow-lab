import React from 'react';

function Filter(props) {
  return (
    <select onChange={props.onCategoryChange}>
      <option value="all">All</option>
      <option value="food">Food</option>
      <option value="clothes">Clothes</option>
      <option value="electronics">Electronics</option>
    </select>
  );
}

export default Filter;
