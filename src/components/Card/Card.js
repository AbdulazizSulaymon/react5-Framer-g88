import React, { Component } from 'react'
import "./Card.css"

export default class Card extends Component {
    render() {
        console.log(this.props);

        return <div className={`myCard ${this.props.className || "bg-dark"} `}>
            {this.props.children}
        </div>
    }
}