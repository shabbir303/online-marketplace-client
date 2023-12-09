import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/PW9rb5T/errorpafe.jpg')] bg-cover h-screen">
            <Link to='/'>
            <button className="text-[40px] text-teal-500 text-center pl-[1200px] pt-[400px] font-Montstreet font-[700]">Back To Home </button>
            </Link>
        </div>
    );
};

export default Error;