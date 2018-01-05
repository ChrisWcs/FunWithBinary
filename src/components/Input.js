import React, { Component } from 'react';
import { createCheckAnswer, createNewRandom } from '../actions/actionCreators';
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
        let { value } = event.target;
        this.setState( () => {
            return {
                value: value,
            };
        });
    }

    handleSubmit(){
        this.props.parentSubmit(createCheckAnswer(this.state.value));
    }

    render(){
        let { value } = this.state;
        return(
            <FlexRow>
                <input type="text" value={value} onChange={this.handleOnChange}/>
                <BinButton onClick={this.handleSubmit} feedBack={this.props.answer}>Check Answer</BinButton>
            </FlexRow>
        );
    }
}

Input.propTypes = {
    parentSubmit: PropTypes.func,
    answer: PropTypes.bool
};

export default Input;