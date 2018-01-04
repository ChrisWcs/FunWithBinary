import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexRow from '../styledcomps/FlexRow';
import BinButton from '../styledcomps/BinButton';

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
                <BinButton onClick={this.handleSubmit} color={this.props.answer}>Check Answer</BinButton>
            </FlexRow>
        );
    }
}

Input.propTypes = {
    parentSubmit: PropTypes.func
};

export default Input;