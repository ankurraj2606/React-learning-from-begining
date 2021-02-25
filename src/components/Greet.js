import React from "react";

export default function Greet(props) {
  console.log(props);
  return (
    <div>
      <div>
        Hello Ankur! {props.name} a.k.a {props.heroname}
      </div>
      {props.children}
    </div>
  );
}
