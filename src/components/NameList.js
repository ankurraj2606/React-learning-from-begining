import React from "react";

function NameList() {
  const names = ["bruce", "clarke", "Diana"];
  const nameList = names.map((name) => <li>{name}</li>);
  return (
    <div>
      <ol>{nameList}</ol>
    </div>
  );
}

export default NameList;
