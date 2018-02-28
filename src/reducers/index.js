import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formsReducer } from 'redux-form';
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formsReducer
});

export default rootReducer;
