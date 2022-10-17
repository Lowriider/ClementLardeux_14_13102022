import EmployeesDataTable from "../Components/EmployeesDataTable";

const EmployeesList = () => {

    const employees = JSON.parse(localStorage.getItem('employees'));

  return (
      <div className="flex items-center justify-center mx-auto overflow-x-auto">
        <EmployeesDataTable data={employees}/>
      </div>
  )
}
export default EmployeesList