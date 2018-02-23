import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer
  // ^^ key is the name of the piece of state, value is the reducer itself
});

export default rootReducer;
