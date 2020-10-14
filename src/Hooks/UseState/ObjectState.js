import React, { useState } from 'react';

export const ObjectState = () => {
  //using seperate states
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');

  //when using same state
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <h1>{name.firstName}</h1>
      <input
        type="text"
        value={name.firstName}
        onChange={event => setName({ ...name, firstName: event.target.value })}
      ></input>
      <h1>{name.lastName}</h1>
      <input
        type="text"
        value={name.lastName}
        onChange={event => setName({ ...name, lastName: event.target.value })}
      ></input>
    </div>
  );
};
