import propTypes from "prop-types";

const Person = ({ id, name, number, handleDeletePerson }) => {
  return (
    <div>
      {name} {number}{" "}
      <button onClick={() => handleDeletePerson(id)}>delete</button>
    </div>
  );
};

Person.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  handleDeletePerson: propTypes.func.isRequired,
};

export default Person;
