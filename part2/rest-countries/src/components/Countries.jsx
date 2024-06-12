import propTypes from "prop-types";

const Countries = ({ countries }) => {
  if (countries.length === 0) {
    return <div></div>;
  } else if (countries.length !== 0) {
    return (
      <ul>
        {countries.map((c) => {
          <li>{c}</li>;
        })}
      </ul>
    );
  }
  return <div></div>;
};

Countries.propTypes = {
  countries: propTypes.any.isRequired,
};

export default Countries;
