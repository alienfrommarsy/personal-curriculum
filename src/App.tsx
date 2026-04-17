import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer
import Home from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component
// Add routes for other components as needed

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {/* Add more routes here */}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;