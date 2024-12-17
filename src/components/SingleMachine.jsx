/* eslint-disable react/prop-types */
import {useState} from "react"
import MachineForm from "./MachineForm";

// This components displays a single machine card with all its details
const SingleMachine = (props) => {
  const {machine, setMachine} = props;
  const [visible, setVisible] = useState(false);
  console.log(machine);

  /* function that shows packers or operators
  this function only takes either of two case sensitive string arguments: "Operators" or "Packers".
  */
  function showPeople(peopleType){
    /* Set a variable that will represent the appropriate group of people, either operators or packers as passed into the function.
    */
    const peopleGroup = peopleType == "Operators" ? machine.operators : machine.packers;
    return(
      <div className="people-wrapper">
        <div className="tag-wrapper">
          <p className="card-text"><span className="tag">{peopleType}: </span></p>
        </div>
        {/* display list of people in specified group */}
        {
          peopleGroup.map((person, personIndex) => {
            return(
              <p className="card-text" key={personIndex}>{person}</p>
            )
          })
        } 
      </div>
    )
  }

  // show and hide edit button
  function handleVisibility(){
    setVisible(false);
    setVisible(!visible);

  }

  // function that edits cards
  function editCard(machine){
    console.log("editing", machine.machine_name)
    handleVisibility();
  }

  return(
    <div className="card-wrapper">
      {!visible && <div className="card m-4" /*</>onClick={(e) => handleVisibility(e.target)}*/>
        <div className="card-body">
          <div className="card-title">
            <h4>{machine.machine_name}</h4>
            <button type="button" onClick={()=>editCard(machine)}>Edit</button>
          </div>
          <p className="card-text"><span className="tag">Part ID:</span> {machine.part_number}</p>
          {/* show operators */}
          {showPeople("Operators")}
          {showPeople("Packers")}
        </div>
      </div>}
      {visible && <MachineForm machine={machine} setVisible={setVisible}/>}
    </div>
    
  )
}

export default SingleMachine;