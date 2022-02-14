import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  const _apiCategories = 'https://api.chucknorris.io/jokes/categories';
  const _apiRandom = 'https://api.chucknorris.io/jokes/random';

  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState('');

  const GetCategories = (url) => {
    axios.get(url)
      .then(res => {
        setCategories(res.data);
      });
  };

  const GetJoke = (url) => {
    axios.get(url)
      .then(res => {
        setJoke(res.data.value);
      });
  };

  // const FindJoke = (url) => {
  //   axios.get(url)
  //     .then(res => {
  //       setJoke(res.data.value);
  //     });
  // };

  useEffect(() => GetCategories(_apiCategories), []);
  useEffect(() => GetJoke(_apiRandom), []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((el, id) => {
          return (
          <li 
            key={id}
          >
            {el}
          </li>);
        })}
        <li onClick={console.log(19)}>random</li>
      </ul>
      <div>
        {joke}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));