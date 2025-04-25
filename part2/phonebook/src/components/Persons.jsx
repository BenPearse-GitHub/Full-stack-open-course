import React from "react";

const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);

const Persons = ({ people }) =>
  people.map((person) => (
    <Person key={person.name} name={person.name} number={person.number} />
  ));

export default Persons;
