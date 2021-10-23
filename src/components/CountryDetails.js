import React, { Fragment } from 'react';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h3>{country.name}</h3>
      <Fragment>
        capital: {country.capital}
        <br></br>
        population: {country.population}
      </Fragment>
      <h3>Spoken Languages</h3>
      <ul>
        {country.languages.map((i) => (
          <li>{i.name}</li>
        ))}
      </ul>
      <img src={country.flag} style={{ width: 200 }} />
    </div>
  );
};

export default CountryDetails;
