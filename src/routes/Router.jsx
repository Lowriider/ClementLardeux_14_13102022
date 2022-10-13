import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "../js/Pages/Home";
import MainLayout from "../js/Layouts/MainLayout";
import EmployeesList from "../js/Pages/EmployeesList";
import ErrorNotFound from "../js/Pages/ErrorNotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/employees-list" element={<EmployeesList/>}/>
                    <Route
                        path="*"
                        element={<ErrorNotFound/>}
                    />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router
