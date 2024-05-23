import { useState, useEffect } from "react";
import Person from "./components/Person";
import AddForm from "./components/AddForm";
import Filter from "./components/Filter";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("...enter new name");
  const [newNumber, setNewNumber] = useState("...enter new number");
  const [query, setQuery] = useState("");

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString(),
    };
    const personNames = persons.map((i) => i.name);
    if (personNames.includes(newName)) {
      window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );
      const existingObject = persons.filter((obj) => obj.name === newName)[0];
      existingObject.number = newNumber;
      personService
        .update(existingObject.id, existingObject)
        .then((res) => {
          console.log(res);
          setPersons(
            persons.map((p) => (p.id !== existingObject.id ? p : res.data))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      personService
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson.data));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleDeletePerson = (id) => {
    personService
      .deletePerson(id)
      .then((res) => {
        console.log(res);
        setPersons(persons.filter((p) => p.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
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
      <Filter query={query} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map((person) => (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            number={person.number}
            handleDeletePerson={handleDeletePerson}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
