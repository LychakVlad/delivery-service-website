import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ points, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
      {points.map((item, index) => (
        <li key={index} className="dropdown-item">
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
