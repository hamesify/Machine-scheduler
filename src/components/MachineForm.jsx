import {useState} from "react";

/* 
-This component requires a list of all employees
-The list should not include the employees already assigned to the machine.
-This component displays a list of assigned operators and packers for the specific machine and the ability to delete employees from the assigned machine.
*/

let employees = JSON.parse(localStorage.getItem("employees"));


const MachineForm = (props) => {
  const {machine, setVisible} = props;
  const [opName, setOpName] = useState("")
  const [pacName, setPacName] = useState("")
  const [partId, setPartId] = useState(machine.part_number)

  console.log("machine",machine)
  console.log("Employees",employees)
  console.log(machine.operators)

  function handleForm(e){
    e.preventDefault();
    const opInput = opName;
    const pacInput = pacName;
    console.log(opInput, pacInput);
  }

  return(
    <form className="edit-form" onSubmit={handleForm}>
      <div className="form-header">
        <h4>{machine.machine_name}</h4>
        <button type="button" onClick={()=>setVisible(false)}>Close</button>
      </div>
      <label htmlFor="partIdent">Part ID: </label>
      <input type="text" id="partIdent" name="partident" value={partId} onChange={(e)=>setPartId(e.target.value)}></input>
      <label htmlFor="operatorName">Operator</label>
      <input type="text" id="operatorName" name="opname" value={opName} onChange={(e) => setOpName(e.target.value)}/>
      <label htmlFor="packerName">Packer: </label>
      <input type="text" id="packerName" name="pacname" value={pacName} onChange={(e) => setPacName(e.target.value)}/>
      <button type="submit">Save</button>
    </form>
  )
}

export default MachineForm;
