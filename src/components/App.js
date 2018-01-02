import React, { Component } from 'react';

import BinaryContainer from './BinaryContainer';
import FlexCol from '../styledcomps/FlexCol';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            binaryNumber: [ 1, 0, 1, 0 ],
            currentAnswer: -1,
        };

    }


    render(){
        return (
            <FlexCol>
                <BinaryContainer number={this.state.binaryNumber}/>
            </FlexCol>
        );
    }
}

export default App;