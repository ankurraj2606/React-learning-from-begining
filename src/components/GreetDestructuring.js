import React from "react";

//Destructured in parameter itself.

// export default function Greet({name, heroname}) {
//   return (
//     <div>
//       <div>
//         Hello {name} a.k.a {heroname}
//       </div>
//       </div>
//   );
// }

//Destructured in function Body.

export default function Greet(props) {
    const {name, heroname} = props;
    return (
      <div>
        <div>
          Hello {name} a.k.a {heroname}
        </div>
        </div>
    );
  }
