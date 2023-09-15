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
        <div>
          {employees.map((employee) => (
            <div key={employee.id} className="mb-8">
              <div>Employee Id: {employee.id}</div>
              <div>Email: {employee.email}</div>
              <div>Name: {employee.name}</div>
              <div>Phone Number: {employee.phone_number}</div>
              <div>Position: {employee.position}</div>

            </div>
          ))}
        </div>
      )}
      {addMemberPopUp && <AddMemberPopUp toggle={toggleAddMemberPopUp} />}
    </div>
  )
}
export default PageClient
