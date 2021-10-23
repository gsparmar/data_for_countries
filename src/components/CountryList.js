import React from 'react';
import CountryDetails from './CountryDetails';

const CountryList = ({ countries, country, setCountry }) => {
  const searchResult = countries.filter((c) =>
    c.name.toLowerCase().includes(country.toLowerCase())
  );
  return (
    <div>
      {searchResult.length > 10 ? (
        <p>too many results, add another filter</p>
      ) : searchResult.length === 1 ? (
        <CountryDetails country={searchResult[0]} />
      ) : (
        <ul>
          {searchResult.map((country) => (
            <li>
              {country.name}
              <button onClick={() => setCountry(country.name)}>show</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryList;
