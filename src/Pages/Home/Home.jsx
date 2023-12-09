import { Link } from "react-router-dom";
import EmployeerPlan from "./EmployeerPlan";
import JobCategory from "./JobCategory";
import LatestB from "./LatestB";
import MarqueeBrands from "./MarqueeBrands";
import Swiper1 from "./Swiper";


const Home = () => {
    return (
        <div>
            <div className=" mx-auto font-Montstreet  bg-[url('https://i.ibb.co/SDTyhGK/home-bg.jpg')] bg-cover md:h-[700px] lg:h-screen">
                <div className="flex flex-col md:flex-col lg:flex-row justify-between max-w-7xl mx-auto items-center pt-[100px]">
                    
                    <div>
                    <h1 className="text-[40px] font-[700]">Meet <span className="italic text-orange-500">FFreelancer</span> – The Best <br /> Platform for <span className="text-teal-500">Buyers </span><br />and <span className="text-red-500">Sellers</span>.</h1>
                    <h1 className="text-[20px] font-[500] text-slate-500">
                        Find the right freelance service, right away</h1>
                        <div className="flex mt-[30px] gap-3">
                        <Link to='/employee'>
                        <button className="btn rounded-3xl bg-lime-600 text-white font-[500] text-[15px]">Purchase Membership</button>
                        </Link>
                       <Link to='/latest'>
                       <button className="btn rounded-3xl bg-white text-black font-[500] text-[15px]">Latest Blog</button>
                       </Link>
                        </div>
                    </div>
                    <div>
                        <Swiper1></Swiper1>
                        <h1 className="hidden lg:block gap-[20px] font-semibold ">Keyword: <button className="btn btn-outline btn-primary ">Web Development</button> <button className="btn btn-outline btn-secondary">Wordpress</button> <button className="btn btn-outline btn-primary">Logo Design</button> <button className="btn btn-outline btn-error ">Marketing</button> </h1>
                    </div>
                </div>


            </div>
            <MarqueeBrands></MarqueeBrands>
            <div className="my-[50px] ">
                <JobCategory></JobCategory>
            </div>
            <div className="mt-[130px] mb-[100px]">
                <EmployeerPlan></EmployeerPlan>
            </div>
            <div className="mt-[130px] mb-[100px]">
                <LatestB></LatestB>
            </div>
        </div>
    );
};

export default Home;