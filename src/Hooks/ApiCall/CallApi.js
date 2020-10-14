import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const CallApi = () => {
  const [id, setId] = useState('');

  const [fetchId, setFetchId] = useState('');

  function inputChangeHandler(event) {
    setId(event.target.value);
  }

  function fetchDataHandler() {
    setFetchId(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
      .then(response => console.log(response))
      .then(err => console.log(err));
  }, [fetchId]);
  return (
    <div>
      <input type="text" value={id} onChange={inputChangeHandler}></input>
      <button onClick={fetchDataHandler}>Get data</button>
    </div>
  );
};
