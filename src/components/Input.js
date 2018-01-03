import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexRow from '../styledcomps/FlexRow';


class Input extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: ""
        }

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOnChange(event){
        this.setState( () => {
            let { value } = event.target;
            return {
                value: value,
            };
        });
    }

    handleSubmit(){
        this.props.parentSubmit(this.state.value);
    }

    render(){
        let { value } = this.state;
        return(
            <FlexRow>
                <input type="text" value={value} onChange={this.handleOnChange}/>
                <button onClick={this.handleSubmit}>Check Answer</button>
            </FlexRow>
        );
    }
}

Input.propTypes = {
    parentSubmit: PropTypes.func
};

export default Input;