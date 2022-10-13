import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = ({children}) => {
    return (
        <>
            <MainHeader/>
                {children}
            <MainFooter/>
        </>
    )
}
export default MainLayout