import React, { Component } from 'react';

import Input from './Input';
import BinaryContainer from './BinaryContainer';
import FlexCol from '../styledcomps/FlexCol';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            binaryNumber: [ 1, 0, 1, 0 ],
            currentAnswer: -1,
        };

        this.submit = this.submit.bind(this);
    }

    submit(value){
        this.setState( () => ({
            currentAnswer: value,
        }));
    }

    render(){
        return (
            <FlexCol>
                <BinaryContainer number={this.state.binaryNumber}/>
                <Input parentSubmit={this.submit} answer={true}/>
            </FlexCol>
        );
    }
}

export default App;