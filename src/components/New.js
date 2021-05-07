import React from 'react'
import Box from './Box'

class New extends React.Component {
    state = {
        newItemText: "",
        newDescriptionText: ""
    }

    errorText = "This value is incorrect"

    handleInputNameChange = (event) => {
        this.setState({
            newItemText: event.target.value
        })
    }

    handleInputDescriptionChange = (event) => {
        this.setState({
            newDescriptionText: event.target.value
        })
    }

    handleKey = (event) => {
        if (event.code === "Enter"){
            this.props.adder(this.state.newItemText, 
                            this.state.newDescriptionText)
            this.setState({
                newItemText : "",
                newDescriptionText : "",
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <span className = "boxText">Name:</span>
                <Box
                    text = {this.state.newItemText}
                    onChange ={this.handleInputNameChange}
                    onKeyDown = {this.handleKey}
                />
            
                <span className = "boxText">Description:</span>
                <Box
                    text = {this.state.newDescriptionText}
                    onChange ={this.handleInputDescriptionChange}
                    onKeyDown = {this.handleKey}
                />
                
                {this.state.displayError && <h1 style={{color : "red"}} className="abc">{this.errorText}</h1>}
                
            </React.Fragment>
        );
    }
}

export default New;