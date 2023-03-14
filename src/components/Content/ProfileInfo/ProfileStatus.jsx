import React, { Component } from "react";

class ProfileStatus extends Component {
    statusTextElement = React.createRef()
    state = {
        status: true,
        text: this.props.status
    }

    toggleStatus = (e) => {
        this.setState({
            status: !this.state.status
        })
        this.props.updateProfileStatus(this.state.text)
    }
    onChangeText = (e) => {
        this.setState({
            text: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.state !== this.props.state) {
            this.setState({
                text: this.props.state
            })
        }
        console.log("Component Did Update!!")
    }

    render() {
        return (<div>
                    {this.state.status 
                    ? <h3 onDoubleClick={() => this.toggleStatus()}>{this.state.text || 'Statusa net'}</h3> 
                    : <input onBlur={() => this.toggleStatus()} ref={this.statusTextElement} type="text"
                             onChange={this.onChangeText} value={this.state.text}/>}
                </div>)
    }
}

export default ProfileStatus;