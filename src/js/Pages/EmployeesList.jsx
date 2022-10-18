import EmployeesDataTable from "../Components/EmployeesDataTable";

const EmployeesList = () => {

    const employees = JSON.parse(localStorage.getItem('employees'));

    return (
        <div className="flex">
            {
                employees.length > 0 &&
                <EmployeesDataTable data={employees}/>
            }
        </div>
    )
}
export default EmployeesList