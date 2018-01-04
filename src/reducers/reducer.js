import { valueOfBinary, randomBinaryNumber } from '../utilites/util';
import { CHECK_ANSWER } from '../actions/actions';

const reducer = (state, action) => {
    switch(action.type){
        case CHECK_ANSWER:
            return state;
        default:
            return state;
    }
};

export default reducer;