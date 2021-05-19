import { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import ChartInstance from './components/chatinstance/ChatInstance';

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
        
        <Sidebar />
        <ChartInstance />
      </div>
    </div>
  );
}

export default App;
