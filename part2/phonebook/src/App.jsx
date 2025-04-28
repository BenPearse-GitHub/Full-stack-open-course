import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(
    () =>
      axios
        .get("http://localhost:3001/persons")
        .then((response) => setPersons(response.data)),
    []
  );

  const handleFilterInputChange = (event) => setFilter(event.target.value);

  const handleNameInputChange = (event) => setNewName(event.target.value);

  const handleNumberInputChange = (event) => setNewNumber(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const personsToDisplay =
    filter.length > 0
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        )
      : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filter} onChange={handleFilterInputChange} />
      <h2>Add new entry</h2>
      <PersonForm
        nameValue={newName}
        onNameChange={handleNameInputChange}
        numberValue={newNumber}
        onNumberChange={handleNumberInputChange}
        onSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons people={personsToDisplay} />
    </div>
  );
};

export default App;
