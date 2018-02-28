import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id'); // _.mapKeys is a useful lodash func that returns a new object from an array, keyed according to whatever property you want
        default:
            return state;
    }
}