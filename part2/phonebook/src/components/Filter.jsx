import propTypes from "prop-types";

const Filter = ({ query, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={query} onChange={handleFilterChange} />
    </div>
  );
};

Filter.propTypes = {
  query: propTypes.string.isRequired,
  handleFilterChange: propTypes.func.isRequired,
};

export default Filter;
