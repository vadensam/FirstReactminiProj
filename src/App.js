import React from 'react';
import './App.css';
import FirstComponent from './components/AnewComponent';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
    <FirstComponent />
    <PersonCard fname={"Diane"} lname={"Soyer"} age={98} hair={"grey"}/>
    <PersonCard fname={"Carlos"} lname={"Montoya"} age={39} hair={"brown"}/>
    </div>
  );
}

export default App;
