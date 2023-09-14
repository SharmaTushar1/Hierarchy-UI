// Add Member component. This will be triggered when user clicks the Add Member button and is the only thing visible in the app when it is loaded at first i.e. when the employees array is empty.

const AddMemberPopUp = ({toggle}: {toggle: () => void}) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 w-full h-full">
      <div>
        <h2>Add Member</h2>
        <span className="" onClick={() => toggle()}>X</span>
      </div>
    </div>
  )
}
export default AddMemberPopUp