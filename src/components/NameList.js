import React from "react";

function NameList() {
  const names = ["bruce", "clarke", "Diana"];
  const nameList = names.map((name, idx) => (
    <h5>
      {idx} . {name}
    </h5>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
