import CreateEmployee from "../Components/CreateEmployee";
import {UserContext} from "../Utils/Common";
import {useContext} from "react";

const Home = () => {


    return (
        <div className="flex items-center justify-center flex-col pb-6">

            <h2 className="text-3xl text-white font-semibold mb-6 sm:mb-12">Create Employee</h2>
            <CreateEmployee/>
        </div>
    )
}
export default Home