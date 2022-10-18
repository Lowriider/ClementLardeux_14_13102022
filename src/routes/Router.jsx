import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "../js/Pages/Home";
import MainLayout from "../js/Layouts/MainLayout";
import EmployeesList from "../js/Pages/EmployeesList";
import ErrorNotFound from "../js/Pages/ErrorNotFound";
import {UserContext} from "../js/Utils/Common";
import {useState} from "react";

const Router = () => {
    const localEmployees = JSON.parse(sessionStorage.getItem('employees'));
    const [employees, setEmployees] = useState(localEmployees || []);
    return (
        <BrowserRouter>
            <MainLayout>
                <UserContext.Provider value={{employees, setEmployees}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/employees-list" element={<EmployeesList/>}/>
                    <Route
                        path="*"
                        element={<ErrorNotFound/>}
                    />
                </Routes>
                </UserContext.Provider>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router
