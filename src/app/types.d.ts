type Position = {
  id: string,
  name: string,
}

type Employees = {
  [id: string]: {
    name: string,
    position: string,
    phone_number: string,
    email: string,
  }
}

type Team = {
  [name: string]: {
    employees: employee[],
    leader_id: number, // id of the employee who is the leader
  }
}
