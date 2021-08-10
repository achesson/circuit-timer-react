//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import DisplayCircuits from './components/DisplayCircuits';
import NewCircuitForm from './components/NewCircuitForm';

function App() {
  const [circuitData, setCircuitData] = useState([]);
  let nextId = useState(1);

  const addExercise = (newExercise) => {
 
    //not sure if i need an Id but why not
    newExercise.id = nextId;
    //
    let newCircuitData = [...circuitData, newExercise];
    nextId++;
    setCircuitData(circuitData => newCircuitData);

  }

  return (
    <div className="App">
      
      
      <DisplayCircuits circuitData={circuitData}/>
      <NewCircuitForm addExerciseCb={exercise => addExercise(exercise)} />
      


    </div>
  );
}

export default App;
