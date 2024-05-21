import { useState } from "react";
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

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Daniel Abramov", number: "12-43-234345", id: 4 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 5 },
  ]);
  const [newName, setNewName] = useState("...enter new name");
  const [newNumber, setNewNumber] = useState("...enter new number");
  const [query, setQuery] = useState("...");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    const personNames = persons.map((i) => i.name);
    if (personNames.includes(personObject.name)) {
      alert(`${personObject.name} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredPersons = persons.filter((i) =>
    i["name"].toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={query} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
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
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))}
      </div>
    </div>
  );
};

export default App;
