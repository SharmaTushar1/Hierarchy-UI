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
      {employees.length === 0 ? (<button className="m-8" onClick={() => toggleAddMemberPopUp()}>Add Member</button>): 'Here the data will be shown'}
      {addMemberPopUp && <AddMemberPopUp toggle={toggleAddMemberPopUp} />}
    </div>
  )
}
export default PageClient
