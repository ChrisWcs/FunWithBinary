import {CHECK_ANSWER} from './actions';

export const createCheckAnswer = (answer) => ({
    type: CHECK_ANSWER,
    answer,
});