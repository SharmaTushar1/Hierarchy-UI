'use client';

import { useState } from "react";
import { useStore } from "./store";
import AddMemberPopUp from "./_components/AddMemberPopUp";

const PageClient = () => {

  const employees = useStore(store => store.employees);
  const setEmployees = useStore(store => store.setEmployees);
  const [addMemberPopUp, setAddMemberPopUp] = useState(false);

  const toggleAddMemberPopUp = () => {
    setAddMemberPopUp(prev => !prev);
  }

  // TODO: Make the employee_id and all other ids unique it is making multiple right now.

  const removeEmployee = (employee_id: number) => {
    const updatedArray = employees.filter((prev) => prev.id !== employee_id);
    setEmployees(updatedArray);
  }

  return (
    <div>
      {employees.length === 0 ? (<button className="m-8" onClick={() => toggleAddMemberPopUp()}>Add Member</button>): (
        <div>
          {employees.map((employee) => (
            <div key={employee.id} className="mb-8">
              <div>
                <div>Employee Id: {employee.id}</div>
                <div>Email: {employee.email}</div>
                <div>Name: {employee.name}</div>
                <div>Phone Number: {employee.phone_number}</div>
                <div>Position: {employee.position}</div>
              </div>
              <span onClick={() => removeEmployee(employee.id)}>X</span>
              {/* <span onClick={() => setEmployees((prevEmpArray) => prevEmpArray.filter(prev => prev.id!==employee.id))}>X</span> */}
            </div>
          ))}
        </div>
      )}
      {addMemberPopUp && <AddMemberPopUp toggle={toggleAddMemberPopUp} />}
    </div>
  )
}
export default PageClient
