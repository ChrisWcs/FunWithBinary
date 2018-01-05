import React, { Component } from 'react';
import reducer from '../reducers/reducer';

import Input from './Input';
import BinaryContainer from './BinaryContainer';
import FlexCol from '../styledcomps/FlexCol';

import { createNewRandom } from '../actions/actionCreators';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            appState: {
                binaryNumber: [ 1, 0, 1, 0 ],
                currentAnswer: false
            }
        };

        this.appDispatch = this.appDispatch.bind(this);
        this.dispatchNewNumber = this.dispatchNewNumber.bind(this);
    }

    appDispatch(action){
        this.setState( prevState => ({
            appState: reducer( prevState.appState, action )
        }));
    }

    dispatchNewNumber(){
        this.appDispatch(createNewRandom());
    }

    render(){
        return (
            <FlexCol>
                <BinaryContainer number={this.state.appState.binaryNumber}/>
                <Input parentSubmit={this.appDispatch} answer={this.state.appState.currentAnswer}/>
                <button onClick={this.dispatchNewNumber}>New number</button>
            </FlexCol>
        );
    }
}

export default App;