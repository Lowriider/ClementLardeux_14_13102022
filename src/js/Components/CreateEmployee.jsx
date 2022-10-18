import CustomSelect from "./CustomSelect";
import {useContext, useState} from "react";
import {departments, states, UserContext} from "../Utils/Common";
import CustomDatePicker from "./CustomDatePicker";
import moment from "moment";
import {CustomPopin} from "react-custom-popin-v1/dist/index";
import "react-custom-popin-v1/dist/css/CustomPopin.css";

const CreateEmployee = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        startDate: null,
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: ''
    })

    const [isBirthdateOpen, setIsBirthDatedOpen] = useState(false);
    const [isStartDateOpen, setIsStartdateOpen] = useState(false);
    const [isPopinVisible, setIsPopinVisible] = useState(false);

    const localEmployees = JSON.parse(sessionStorage.getItem('employees')) || [];
    const {employees, setEmployees} = useContext(UserContext);

    const handleToggleBirthDate = (e) => {
        e.preventDefault();
        setIsBirthDatedOpen(true);
        setIsStartdateOpen(false);
    };

    const handleToggleStartDate = (e) => {
        e.preventDefault();
        setIsBirthDatedOpen(false);
        setIsStartdateOpen(true);
    };

    const handleDateChange = (date, isBirthDate) => {
        if (isBirthDate) {
            setIsBirthDatedOpen(false)
            setFormData({...formData, dateOfBirth: moment(date).format("DD-MM-YYYY")})
        } else {
            setIsStartdateOpen(false)
            setFormData({...formData, startDate: moment(date).format("DD-MM-YYYY")})
        }
    }

    const handleSaveEmployee = (e) => {
        e.preventDefault();

        localEmployees.push(formData);
        sessionStorage.setItem('employees', JSON.stringify(localEmployees));
        setEmployees(localEmployees);
        setIsPopinVisible(true)
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
                <div className="flex flex-col max-w-[610px] relative z-20 w-full ">
                    <div onClick={handleToggleBirthDate} className=" w-full h-10 bg-white rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2  pt-2.5 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none">
                        {formData.dateOfBirth}
                    </div>
                    {
                        isBirthdateOpen &&
                        <div className="absolute z-50 top-10">
                            <CustomDatePicker
                                selected={formData.dateOfBirth}
                                onChange={(date) => handleDateChange(date, true)}
                            />
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-col mb-2 sm:flex-row sm:w-full sm:justify-between">
                <label className="mb-2 w-full sm:mb-0" htmlFor="start-date">Start Date</label>
                <div className="flex flex-col max-w-[610px] relative z-10 w-full ">
                    <div onClick={handleToggleStartDate} className=" w-full h-10 bg-white rounded-button border-[#EBEBEB] border-[1px] border-solid pl-2  pt-2.5 text-xs text-gray placeholder:text-[#ADADAD] focus:outline-none">
                        {formData.startDate}
                    </div>
                    {
                        isStartDateOpen &&
                        <div className="absolute z-50 top-10">
                            <CustomDatePicker
                                selected={formData.startDate}
                                onChange={(date) => handleDateChange(date, false)}
                            />
                        </div>
                    }
                </div>

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
            <CustomPopin onClose={() => setIsPopinVisible(false)} isVisible={isPopinVisible}>
                <div>
                    l'employé a été créé
                </div>
            </CustomPopin>
        </form>
    )
}
export default CreateEmployee