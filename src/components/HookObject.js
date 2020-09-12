import React, { useState } from 'react';

const HookObject = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const nameChanged = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };
  return (
    <div>
      first name: {name.firstName}, last name:{name.lastName} <br />
      <button
        onClick={() => {
          setName({ ...name, firstName: 'Moti' });
        }}
      >
        set first name
      </button>
      <button
        onClick={() => {
          setName({ ...name, lastName: 'Elmakies' });
        }}
      >
        set last name
      </button>
      <br />
      <input
        type='text'
        name='firstName'
        value={name.firstName}
        onChange={nameChanged}
      />
      <input
        type='text'
        name='lastName'
        value={name.lastName}
        onChange={nameChanged}
      />
    </div>
  );
};

export default HookObject;
