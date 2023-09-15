'use client';

import { useState } from "react";
import { useStore } from "./store";
import AddMemberPopUp from "./_components/AddMemberPopUp";

const PageClient = () => {

  const employees = useStore(store => store.employees);
  const [addMemberPopUp, setAddMemberPopUp] = useState(false);

  const toggleAddMemberPopUp = () => {
    setAddMemberPopUp(prev => !prev);
  }

  return (
    <div>
      {employees.length === 0 ? (<button className="m-8" onClick={() => toggleAddMemberPopUp()}>Add Member</button>): (
        employees.map((employee) => (
          <div key={employee.id}>
            <div>{employee.id}</div>
            <div>{employee.email}</div>
            <div>{employee.name}</div>
            <div>{employee.phone_number}</div>
            <div>{employee.position_id}</div>
            
          </div>
        ))
      )}
      {addMemberPopUp && <AddMemberPopUp toggle={toggleAddMemberPopUp} />}
    </div>
  )
}
export default PageClient
