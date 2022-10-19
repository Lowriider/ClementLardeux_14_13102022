import {useContext, useState} from "react";
import DataTable from "react-data-table-component";
import {UserContext} from "../Utils/Common";

const EmployeesDataTable = () => {

    const columns = [
        {name: "First Name", selector: row => row.firstName, reorder: true, sortable: true,},
        {name: "Last Name", selector: row => row.lastName, reorder: true, sortable: true,},
        {name: "Start Date", selector: row => row.startDate, reorder: true, sortable: true,},
        {name: "Department", selector: row => row.department, reorder: true, sortable: true,},
        {name: "Date Of Birth", selector: row => row.dateOfBirth, reorder: true, sortable: true,},
        {name: "Street", selector: row => row.street, reorder: true, sortable: true,},
        {name: "City", selector: row => row.city, reorder: true, sortable: true,},
        {name: "State", selector: row => row.state, reorder: true, sortable: true,},
        {name: "Zip Code", selector: row => row.zipCode, reorder: true, sortable: true,},
    ];

    const {employees, setEmployees} = useContext(UserContext);

    const [valueOption, setValueOption] = useState('')
    const filteredData = () => {
        return employees.map(d => {
            return d
        })
    }
    const updateFilter = () => {

        let array = []
        filteredData().map(v => {
            return Object.entries(v).find(f => {
                if (f[1].toLowerCase().includes(valueOption.toLowerCase()) && !array.includes(v)) {
                    array.push(v)
                }
            })
        })
        return array
    }

    return (
        <div className=" w-full mt-10">
            <div className="mb-20 flex flex-col justify-center items-center">
                <label className="pl-2 mr-2 mb-3 text-white font-semibold text-2xl" htmlFor="filter-value">Search for value</label>
                <input disabled={employees.length === 0} className={"max-w-[600px] w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-black placeholder:text-black focus:outline-none"} id="filter-value" onChange={(e) => setValueOption(e.target.value)} type="text" placeholder="Value to filter"/>
            </div>
            {
                employees.length > 0 ?
                    <div className="sm:overflow-x-scroll">
                        <DataTable
                            columns={columns}
                            data={valueOption.length > 0 ? updateFilter() : filteredData()}
                            pagination/>
                    </div>
                    :
                    <div className="flex justify-center items-center">
                        No data found
                    </div>
            }
        </div>
    )
}
export default EmployeesDataTable