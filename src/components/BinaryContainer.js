import React from 'react';
import FlexRow from '../styledcomps/FlexRow';
import BinBox from '../styledcomps/BinBox';

const BinaryContainer = ({number}) => (
    <FlexRow>
        { number.map( (x, i) => <BinBox key={i}>{x}</BinBox> ) }
    </FlexRow>
);

export default BinaryContainer;