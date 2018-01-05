import { valueOfBinary, randomBinaryNumber } from '../utilites/util';
import { CHECK_ANSWER, NEW_RANDOM } from '../actions/actions';

const reducer = (state, action) => {
    switch(action.type){
        case CHECK_ANSWER:
            return {
                ...state,
                currentAnswer: valueOfBinary(state.binaryNumber) == action.answer
            };
        case NEW_RANDOM:
            return {
                binaryNumber: randomBinaryNumber(8),
                currentAnswer: false
            };
        default:
            return state;
    }
};

export default reducer;