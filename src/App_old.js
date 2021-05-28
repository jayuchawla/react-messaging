import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ChatInstance from './components/chatinstance/ChatInstance';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Popup from './components/util/Popup';

function App() {
  /////////////////////handle custom popup///////////////////////////
  // const [isOpen, setIsOpen] = useState(false);
  // const [value, setValue] = useState('');

  // const togglePopUp = function() {
  //   setIsOpen(function(prevIsOpen) {
  //     return !prevIsOpen
  //   });
  // }

  // const handleConfim = (inputValue) => {
  //   setValue(inputValue);
  //   togglePopUp();
  // }
  /////////////////////handle custom popup///////////////////////////

  return (
    <div className="app">
      <div className="app__body">
        {/* /////////////////////handle custom popup/////////////////////////// */}
        {/* {
          isOpen ? <Popup inputFieldContent="Please enter room name!" handleCancel={togglePopUp} handleConfirm={handleConfim}/> : null
        } */}
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
    </div>
  );
}

export default App;
