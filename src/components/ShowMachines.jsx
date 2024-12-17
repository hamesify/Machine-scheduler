/* eslint-disable react/prop-types */
import SingleMachine from "./SingleMachine";

// show all machines
const ShowMachines = (props) => {
  const {machines, setMachines} = props;
  console.log("machines:", machines)
  return(
    <div className="show-machines">
      {machines.map((mach) => {
        console.log("were er")
        return(
          <SingleMachine key={mach.id} machine={mach} setMachines={setMachines}/>
        )
      })}
    </div>
  )
}

export default ShowMachines;