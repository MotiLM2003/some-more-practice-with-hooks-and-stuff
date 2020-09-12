import React, { useState } from 'react';

const HookCounterArray = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              id: {item.id}, value: {item.value}
            </li>
          );
        })}
      </ul>

      <button
        onClick={() =>
          setItems([
            ...items,
            { id: items.length, value: Math.ceil(Math.random() * 100) },
          ])
        }
      >
        Add Item
      </button>
    </div>
  );
};

export default HookCounterArray;
