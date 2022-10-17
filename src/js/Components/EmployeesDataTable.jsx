import 'react-tabulator/lib/styles.css';
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";
import {ReactTabulator} from 'react-tabulator'
import {useRef, useState} from "react";

const EmployeesDataTable = ({data}) => {
    const staffCompetencyTableRef = useRef(null);
    const columns = [
        {title: "First Name", field: "firstName",},
        {title: "Last Name", field: "lastName",},
        {title: "Start Date", field: "startDate",},
        {title: "Department", field: "department",},
        {title: "Date Of Birth", field: "dateOfBirth",},
        {title: "Street", field: "street",},
        {title: "City", field: "city",},
        {title: "State", field: "state",},
        {title: "Zip Code", field: "zipCode",},
    ];
    const [valueOption, setValueOption] = useState('')
//Trigger setFilter function with correct parameters
    const updateFilter = () => {
        return data.map(d => {
            if (Object.entries(d).find(v => v[1].toString().toLowerCase().includes(valueOption.toString().toLowerCase()))) {
                return d
            }
        })
    }

    return (
        <div className="w-3/4">
            <div>
                <label className="pl-2 mr-2" htmlFor="filter-value">Search</label>
                <input id="filter-value" onChange={(e) => setValueOption(e.target.value)} type="text" placeholder="value to filter"/>
            </div>
            <ReactTabulator
                onRef={(r) => (staffCompetencyTableRef.current = r.current)}
                data={valueOption.length > 0 ? updateFilter() : data}
                data-custom-attr="test-custom-attribute"
                className="custom-css-class"
                columns={columns}
                options={{
                    pagination: "local",
                    paginationSize: 5,
                    paginationSizeSelector: [10, 15, 20],
                    paginationCounter: "rows",
                    responsiveLayout: "hide",
                    renderHorizontal: "virtual",
                    layout: "fitColumns",
                }}
            />
        </div>
    )
}
export default EmployeesDataTable