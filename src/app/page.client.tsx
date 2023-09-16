'use client';

import { useState } from "react";
import { useStore } from "./store";
import AddMemberPopUp from "./_components/AddMemberPopUp";
import Edit from "@mui/icons-material/Edit";
import EditMemberPopUp from "./_components/EditMemberPopUp";

const PageClient = () => {

  const employees = useStore(store => store.employees);
  const setEmployees = useStore(store => store.setEmployees);
  const [addMemberPopUp, setAddMemberPopUp] = useState(false);
  const [editMemberPopUp, setEditMemberPopUp] = useState(false);
  const [currenEmployeeId, setCurrentEmployeeId] = useState<string>('');

  const toggleAddMemberPopUp = () => {
    setAddMemberPopUp(prev => !prev);
  }

  // TODO: Make the employee_id and all other ids unique it is making multiple right now.

  const removeEmployee = (employee_id: string) => {
    const updateEmployeesObject = {...employees};
    delete updateEmployeesObject[employee_id];
    console.log(updateEmployeesObject);
    setEmployees(updateEmployeesObject);
    localStorage.setItem('employees', JSON.stringify(updateEmployeesObject || {})); // and update the local storage also.
    // TODO: Check every time I am using setEmployees I'm also updating the local storage 'employees'
  }

  const editEmployee = (employee_id: string) => {
    setEditMemberPopUp(true);
    setCurrentEmployeeId(employee_id);
  }

  const hideEditPopUp = () => {
    setEditMemberPopUp(prev => !prev);
  }
  console.log("employees => ", employees);
  console.log("len => ",Object.values(employees).length);
  return (
    <div>
      {Object.values(employees).length == 0 ? (<button className="m-8" onClick={() => toggleAddMemberPopUp()}>Add Member</button>): (
        <div>
          {Object.keys(employees).map((emp_id) => (
            employees[emp_id] && (
              <div key={emp_id} className="mb-8">
                <div>
                  <div>Employee Id: {emp_id}</div>
                  <div>Email: {employees[emp_id].email}</div>
                  <div>Name: {employees[emp_id].name}</div>
                  <div>Phone Number: {employees[emp_id].phone_number}</div>
                  <div>Position: {employees[emp_id].position}</div>
                </div>
                <span onClick={() => removeEmployee(emp_id)}>X</span>
                <Edit onClick={() => editEmployee(emp_id)} />
              </div>
            )
          ))}
        </div>
      )}
      {addMemberPopUp && <AddMemberPopUp toggle={toggleAddMemberPopUp} />}
      {editMemberPopUp && <EditMemberPopUp employee_id = {currenEmployeeId} toggle = {hideEditPopUp} />}
    </div>
  )
}
export default PageClient
