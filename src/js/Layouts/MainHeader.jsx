import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-green pb-10 sm:justify-between sm:flex-row sm:px-10">
            <Link to={`/`}>
                <img className="w-[150px]" src="/images/HRnet.svg" alt=""/>
            </Link>
            <Link className="rounded-button border-solid border-[1px] border-[#11451f] px-3 py-2" to={`/employees-list`}>
                View Current Employees
            </Link>

        </div>
    )
}
export default MainHeader