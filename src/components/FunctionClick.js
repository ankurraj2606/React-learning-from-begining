//import React from 'react'

// export default function FunctionClick() {
//     function buttonClicked(){
//         console.log("button clicked");
//     }
//     return (
//         <div>
//             <button onClick={buttonClicked}>Done</button>
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class FunctionClick extends Component {
    buttonClicked(){
        console.log("button is clicked");
    }
     render() {
            return (
            <div>
                <button onClick={this.buttonClicked}>Done</button>
            </div>
        )
    }
}

