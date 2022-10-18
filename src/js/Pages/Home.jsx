import CreateEmployee from "../Components/CreateEmployee";

const Home = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    return (
        <div className="flex items-center justify-center flex-col pb-6">
            <h2 className="text-3xl text-white font-semibold mb-6 sm:mb-12">Create Employee</h2>
            <CreateEmployee employees={employees}/>
        </div>
    )
}
export default Home