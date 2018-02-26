import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'; // BrowserRouter: this interacts with the history library and decides exactly what to do based on a change inside the url.
// Route: the real workhorse of all things react-router; a react component that we can render inside of any other react component - thepurpose is to provide the configuration that can say "if the url looks like x, show x component"
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() { return <div>Hello!</div> }
}

class Goodbye extends React.Component {
  render() { return <div>Goodbye</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
     <Route path="/hello" component={Hello}/>
     <Route path="/goodbye" component={Goodbye}/>
    </div>
    </BrowserRouter>

  </Provider>
  , document.querySelector('.container'));