import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ChatInstance from './components/chatinstance/ChatInstance';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Popup from './components/util/Popup';
import { useStateValue } from './components/util/user_state_management/StateProvider';

function App() {

  // useReducer takes 2 params(same as reduce method of javascript):
  // 1. REDUCER FUNCTION
  // 2. INITIAL STATE / VALUE
  // -----------useReducer returns a PAIR OF VALUES:-----------
  // 1. newState
  // 2. dispatch method (USED TO SPECIFY THE ACTION TO BE TAKEN)
  // ----------------------------------------------------------
  // REDUCER function takes 2 params: (returns 1 entity: value or object or array ... which is formed by state + action, where + is some operation)
  // 1. CURRENT_STATE
  // 2. ACTION (this DICTATES STATE TRANSITION from current state to new state)
  const [{ user }, dispatch] = useStateValue();

  const app_content = (
    <div className="app__body">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:roomId">
            <ChatInstance />
          </Route>
          <Route path="/">
            <h2>Click a room to start chating!</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  )

  return (
    <div className="app">
      {
        user ? app_content : <Login />
      }
    </div>
  );
}

export default App;
