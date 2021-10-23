import React from 'react';

const FindCountry = ({ country, setCountry }) => {
  return (
    <div>
      find countries:
      <input
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />
    </div>
  );
};

export default FindCountry;
