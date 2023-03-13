import React, { Component } from "react";

class ProfileStatus extends Component {
    state = {
        status: true,
        text: '123'
    }

    toggleStatus = () => {
        this.setState({
            status: !this.state.status
        })
    }
    statusTextElement = React.createRef()
    changeText = () => {
        const text = this.statusTextElement.current.value;
        this.setState({
            text: text
        })
    }

    render() {
        return (<div>
                    {this.state.status 
                    ? <h3 onDoubleClick={() => this.toggleStatus()}>{this.state.text}</h3> 
                    : <input onBlur={() => this.toggleStatus()} ref={this.statusTextElement} type="text" onChange={this.changeText} value={this.state.text}/>}
                </div>)
    }
}

export default ProfileStatus;