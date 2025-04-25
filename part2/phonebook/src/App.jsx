import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

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
