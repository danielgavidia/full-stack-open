import propTypes from "prop-types";

const AddForm = ({
  addPerson,
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

AddForm.propTypes = {
  addPerson: propTypes.func.isRequired,
  newName: propTypes.string.isRequired,
  newNumber: propTypes.string.isRequired,
  handleNameChange: propTypes.func.isRequired,
  handleNumberChange: propTypes.func.isRequired,
};

export default AddForm;
