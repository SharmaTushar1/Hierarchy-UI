// Add Member component. This will be triggered when user clicks the Add Member button and is the only thing visible in the app when it is loaded at first i.e. when the employees array is empty.

import { useStore } from "../store";
import { useForm } from 'react-hook-form';

const AddMemberPopUp = ({toggle}: {toggle: () => void}) => {

  const positions = useStore(state => state.positions);
  const setEmployees = useStore(state => state.setEmployees);
  const employees = useStore(state => state.employees);

  const { register, handleSubmit, formState: { errors } } = useForm();


  const validatePhoneNumber = (value: string) => /^\d{10}$/.test(value) || 'Phone number must be 10 digits';
  const validateEmail = (value: string) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) || 'Invalid email';


  const onSubmit = (employeeData: any) => { // TODO: take care of this for now just using any
    employees[employeeData.id] = {name: employeeData.name, email: employeeData.email, position: employeeData.position, phone_number: employeeData.phone_number}
    setEmployees(employees);
    localStorage.setItem('employees', JSON.stringify(employees)); // Storing in localstorage
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 w-full h-full px-4 sm:px-12 md:px-28 lg:px-60 xl:px-96">
      <div className="flex justify-between m-8 mx-auto">
        <h2>Add Member</h2>
        <span className="cursor-pointer" onClick={() => toggle()}>X</span>
      </div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="id">Employee Id: </label>
            <input placeholder="Employee ID" id="id" {...register('id', { required: 'ID is required' })} />
            {errors.id && <span>{errors.id.message as string}</span>}
          </div>

          <div>
            <label htmlFor="name">Employee Name: </label>
            <input placeholder="Employee Name" id="name" {...register('name', { required: 'Name is required' })} />
            {errors.name && <span>{errors.name.message as string}</span>}
          </div>

          <div>
            <label htmlFor="phone_number">Phone Number: </label>
            <input placeholder="Phone Number" id="phone_number" {...register('phone_number', { required: 'Phone number is required', validate: validatePhoneNumber })} />
            {errors.phone_number && <span>{errors.phone_number.message as string}</span>}
          </div>

          <div>
            <label htmlFor="email">Email: </label>
            <input placeholder="Email" id="email" type = "email" {...register('email', { required: 'Email is required', validate: validateEmail })} />
            {errors.email && <span>{errors.email.message as string}</span>}
          </div>

          <div>
            <label htmlFor="position">Position:</label>
            {/* Storing name here but will change that to id */}
            <select id="position" {...register('position', { required: 'Position is required' })}>
              {Object.keys(positions).map((position, index) => (
                  <option key={index} value={position}>
                      {position}
                  </option>
              ))}
            </select>
            {errors.position && <span>{errors.position.message as string}</span>}
          </div>

          <input type="submit" />
        </form>
      </div>
    </div>
  )
}
export default AddMemberPopUp