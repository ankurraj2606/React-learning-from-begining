import React from "react";

function person({ person }) {
  return (
    <div>
      <h3>
        I am {person.name} , my id is {person.id}, I am {person.age} years old
        and I know {person.skill}
      </h3>
    </div>
  );
}

export default person;
