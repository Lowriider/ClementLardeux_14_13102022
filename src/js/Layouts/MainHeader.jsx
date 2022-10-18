import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-10 sm:justify-between sm:flex-row sm:px-10">
            <Link to={`/`}>
                <img className="w-[150px]" src="/images/HRnet.svg" alt=""/>
            </Link>
            <Link className="text-white rounded-button border-solid border-[1px] border-white px-3 py-2" to={`/employees-list`}>
                View Current Employees
            </Link>
        </div>
    )
}
export default MainHeader