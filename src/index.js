import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // BrowserRouter: this interacts with the history library and decides exactly what to do based on a change inside the url.
// Route: the real workhorse of all things react-router; a react component that we can render inside of any other react component - thepurpose is to provide the configuration that can say "if the url looks like x, show x component"
// Switch component takes in a collection of different routes
import promise from 'redux-promise';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore); // why does order matter?



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch> 
        {/* switch component looks at all routes inside of it and then renders the first route that matches the url; therefore put the most specific routes at the top of the list */}
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/" component={PostsIndex} />
      </Switch>
    </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));