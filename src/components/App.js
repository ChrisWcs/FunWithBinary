import React, { Component } from 'react';
import reducer from '../reducers/reducer';

import Input from './Input';
import BinaryContainer from './BinaryContainer';
import FlexCol from '../styledcomps/FlexCol';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            appState: {
                binaryNumber: [ 1, 0, 1, 0 ],
                currentAnswer: -1
            }
        };

        this.appDispatch = this.appDispatch.bind(this);
    }

    appDispatch(action){
        this.setState( prevState => ({
            appState: reducer( prevState, action )
        }));
    }

    render(){
        return (
            <FlexCol>
                <BinaryContainer number={this.state.appState.binaryNumber}/>
                <Input parentSubmit={this.appDispatch} answer={true}/>
            </FlexCol>
        );
    }
}

export default App;