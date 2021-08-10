import React, {useState} from "react";
import Form from './Form';

const groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


function NewCircuitForm(props) {
  
  const [isClicked, setIsClicked] = useState(false);
  const [groupIx, setGroupIx] = useState(0);



  const addExercise = exercise => {
    exercise.group = groupNames[groupIx];
    props.addExerciseCb(exercise);
    
  };

    return (
      <div className="Form">
          <h3>New Circuit Form</h3>
          
          <Form addExerciseCb={exercise => addExercise(exercise)}/>
          <button>Add New Circuit</button>
      
  
      </div>
    );
  }
  
  export default NewCircuitForm;