import propTypes from "prop-types";

const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
    </div>
  );
};

Person.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default Person;
