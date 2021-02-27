import React from "react";
import Person from "./Person";

function NameListObj() {
  const persons = [
    {
      id: 1,
      name: "Ankur",
      age: 24,
      skill: "React",
    },
    {
      id: 2,
      name: "Raj",
      age: 25,
      skill: "Vue",
    },
    {
      id: 3,
      name: "Rahul",
      age: 29,
      skill: "Angular",
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default NameListObj;
