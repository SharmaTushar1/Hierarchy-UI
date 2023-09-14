type position = {
  id: number,
  position_name: string,
}

// The id I'll add manually but in actual database for the employees it will be uuid() or something

type employee = {
  id: number,
  name: string,
  position_id: string,
  phone_number: string,
  email: string,
}
