import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div className="">
            <div className="bg-transparent ">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;