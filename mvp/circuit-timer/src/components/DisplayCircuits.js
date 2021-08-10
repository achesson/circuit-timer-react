import React from "react";

function DisplayCircuits(props) {


    return (
      <div className="DisplayCircuits">
          <h2> Display Circuits</h2>
          <p> {props.circuitData.map(e => <h3>{e.exerciseName}</h3>)}</p>

  
      </div>
    );
  }
  
  export default DisplayCircuits;