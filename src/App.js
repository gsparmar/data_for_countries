import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import './App.css';

import FindCountry from './components/FindCountry';
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    console.log('effect');
    axios.get('https://restcountries.com/v2/all').then((res) => {
      console.log('promise fulfilled');
      setCountries(res.data);
    });
  }, []);

  return (
    <div>
      <FindCountry country={country} setCountry={setCountry} />
      <CountryList
        countries={countries}
        country={country}
        setCountry={setCountry}
      />
    </div>
  );
};

export default App;
