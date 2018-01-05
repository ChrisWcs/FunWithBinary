import {CHECK_ANSWER, NEW_RANDOM} from './actions';

export const createCheckAnswer = (answer) => ({
    type: CHECK_ANSWER,
    answer,
});

export const createNewRandom = () => ({
    type: NEW_RANDOM
});