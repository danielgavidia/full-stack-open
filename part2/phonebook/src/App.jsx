import { useState } from "react";
import propTypes from "prop-types";

const Person = ({ name }) => {
  console.log(name);
  return <div>{name}</div>;
};

Person.propTypes = {
  name: propTypes.string.isRequired,
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("...enter new name");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const personObject = {
      name: newName,
      id: persons.length + 1,
    };
    console.log(persons);
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <Person key={person.id} name={person.name} />
        ))}
      </div>
    </div>
  );
};

export default App;
