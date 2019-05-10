import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Comreuse from './Components/Comreuse'
import Add from './Components/add'
import Message from './Components/Message'

function App() {
  return (
    <div className="App">
    {/* <Greet name='Hari' heroName='XYZ'></Greet>
    <Greet name='Nath' heroName='ABCD'></Greet>
    <Greet name='Reddy'heroName='123'></Greet>
    <Welcome  name='123' heroName='XYZ'></Welcome>
    <Welcome  name='456' heroName='XYZ'></Welcome>
    <Welcome  name='789' heroName='XYZ'></Welcome>
    <Hello></Hello>
    <Comreuse name ='Clark' heroName ='IRONMAN'>
    <p>He is Legend</p>
    </Comreuse>
    <Comreuse name ='Bruce' heroName ='HULK'>
    <button>Action</button>
    </Comreuse> */}
    <Add></Add>
    <Message></Message>

    </div>
  );
}

export default App;
