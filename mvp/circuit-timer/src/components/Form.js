import React, {useState} from "react";


const EmptyFormData = {
  exerciseName: "",
  durationTime: ""
};


function Form(props) {
  const [exercise, setExercise] = useState(EmptyFormData);
 

  const handleChange = e => {
    //extract data
    let { name, value } = e.target;

    //set data
    let newExercise = {...exercise};
    newExercise[name] = value;
    setExercise(exercise => newExercise);





    // setFormData(formData => ({
    //   ...formData,
    //   [name]: value
    // }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addExerciseCb(exercise);
    setExercise(EmptyFormData);
  };

    return (
      <div className="Form">
          <h3>Add New Exercise Form</h3>
      <form onSubmit={e => handleSubmit(e)}>
        <span id="text-fields">
          <input
            type="text"
            name="exerciseName"
            placeholder="Enter exercise"
            value={exercise.exerciseName}
            onChange={e => handleChange(e)}
          />
          <input
            type="text"
            name="durationTime"
            placeholder="Enter duration"
            value={exercise.durationTime}
            onChange={e => handleChange(e)}
          />
        </span>
        <button type="submit">Submit</button>

          </form>
  
      </div>
    );
  }
  
  export default Form;