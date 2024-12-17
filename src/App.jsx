/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react";
import Banner from "./components/Banner"
import employeesData from "./components/employees";
import machinesData from "./components/data"
import partIds from "./components/partNumbers";
import ShowMachines from "./components/ShowMachines";

// function that creates initial database on localstorage if it doesnt exist for all data. Does not return anything.
function createLocal(storageName, theState, setStateFunction){
  localStorage.getItem(storageName) ? setStateFunction(JSON.parse(localStorage.getItem(storageName))) : localStorage.setItem(storageName, JSON.stringify(theState));
}

const App = () => {
  // get machine data from database
  const [machines, setMachines] = useState(machinesData);
  const [employees, setEmployees] = useState(employeesData);
  const [partid, setPartId] = useState(partIds);
  // function that takes the initial machines data and saves to localstorage, only if "machines" does not exist in localstorage already
  function saveToLocal(){
    // if localstorage doesnt exist, exist and warn user
    if(!localStorage){
      alert("where is local?")
      return;
    }
    // if localstorage exists, check if "machines" exists. if not create it
    createLocal("machines", machines, setMachines);
    createLocal("employees", employees, setEmployees);
    createLocal("part_id", partid, setPartId);
  }

  useEffect(()=>{
    saveToLocal();
  },[])

  return(
    // app container
    <div className="container">
      {/* display the title */}
      <Banner/>
      {/* show all machines */}
      <ShowMachines machines={machines} setMachines={setMachines} employees={employees} setEmployees={setEmployees} partid={partid} setPartId={setPartId}/>
    </div>
    
  )
}

export default App;