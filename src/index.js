import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Ex22 from './components/Ex2.2/2.2.jsx'
import Box1 from './components/Ex3.1/box1.jsx'
import Quiz from './components/Ex3.2.js/quiz.jsx';
import ButtonText from './components/4.1/4.1'


function App() {
  
  return (
    <div className="App">
      <ButtonText text="Important"/>
      <ButtonText text="Not Important"/>
    </div>
  );
}






ReactDOM.render(

    <App />

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
