import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './components/util/user_state_management/Reducer';
import { StateProvider } from './components/util/user_state_management/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    {/* // https://www.youtube.com/watch?v=tEqNSOhCHLU&t=291s */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
