import React, { Component } from 'react'

export default class DestructuringClass extends Component {
    render() {
        const {name, rollNo, nickname} = this.props;
        return (
            <div>
                <div>I am {name} with roll no {rollNo} and nickName {nickname}</div>
            </div>
        )
    }
}
