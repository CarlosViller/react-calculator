import React, { Component } from 'react'

export default class Button extends Component {
    
    handleClick = ()=> {
        this.props.onButtonPress(this.props.value)
    }

    render() {
        return (
            <button className={this.props.className} value={this.props.value} onClick={this.handleClick}>
                {this.props.value}
            </button>
        )
    }
}
