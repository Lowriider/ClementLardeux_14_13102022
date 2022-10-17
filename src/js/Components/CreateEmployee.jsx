import CustomSelect from "./CustomSelect";
import {useState} from "react";
import {departments, states} from "../Utils/Common";

const CreateEmployee = ({employees}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const handleSaveEmployee = () => {
        employees.push(formData);
        localStorage.setItem('employees', JSON.stringify(employees));
    }

    const getStates = () => {
        return states.map((state, key) => {
            return {
                value: key + 1,
                label: state.name,
                abbreviation: state.abbreviation
            }
        })
    }

    const getDepartments = () => {
        return departments.map((dep, key) => {
            return {
                value: key + 1,
                label: dep.name,
            }
        })
    }

    const getCurrentState = () => {
       return getStates().find((state) => state.abbreviation === formData.state)
    }

   const getCurrentDepartment = () => {
        return getDepartments().find((dep) => dep.label === formData.department)
   }


    return (
        <form onSubmit={handleSaveEmployee} id="create-employee" className="w-full px-6 mb-6 sm:flex sm:flex-col sm:items-center sm:justify-center sm:max-w-[800px]">
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="first-name">First Name</label>
                <input className="w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none"
                       type="text"
                       id="first-name"
                       onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="last-name">Last Name</label>
                <input className="max-w-[600px] w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none"
                       type="text"
                       id="last-name"
                       onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="date-of-birth">Date of Birth</label>
                <input className="max-w-[600px] w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none"
                       id="date-of-birth"
                       type="date"
                       onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="start-date">Start Date</label>
                <input className="max-w-[600px] w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none"
                       id="start-date"
                       type="text"
                       onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="street">Street</label>
                <input className="max-w-[600px] w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none"
                       id="street"
                       type="text"
                       onChange={(e) => setFormData({...formData, street: e.target.value})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="city">City</label>
                <input className="max-w-[600px] w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none"
                       id="city"
                       type="text"
                       onChange={(e) => setFormData({...formData, city: e.target.value})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="state">State</label>
                <CustomSelect value={getCurrentState()}
                              options={getStates()}
                              onChange={(option) => setFormData({...formData, state: option.abbreviation})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="zip-code">Zip Code</label>
                <input className="max-w-[600px] w-full h-10 rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none"
                       id="zip-code"
                       type="number"
                       onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                />
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="department">Department</label>
                <CustomSelect
                              value={getCurrentDepartment()}
                              options={getDepartments()}
                              onChange={(option) => setFormData({...formData, department: option.label})}/>
            </div>
            <div className="flex items-center w-full justify-end mt-6 sm:transition-all sm:hover:scale-110  sm:justify-center ">
                <button className="bg-purple text-xs text-white text-center font-semibold py-[13px] px-[26px] rounded-button cursor-pointer sm:max-w-[180px] sm:w-full sm:text-xl sm:py-2">
                    Save
                </button>
            </div>
        </form>
    )
}
export default CreateEmployee