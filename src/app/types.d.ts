type position = {
  id: number,
  name: string,
}

// The id I'll add manually but in actual database for the employees it will be uuid() or something

type employee = {
  id: number,
  name: string,
  position: string,
  phone_number: string,
  email: string,
}

type team = {
  id: number,
  name: string,
  employees: employee[],
  leader_id: number, // id of the employee who is the leader
}
