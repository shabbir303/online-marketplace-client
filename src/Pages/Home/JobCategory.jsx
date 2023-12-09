/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const JobCategory = () => {

    const jobDeadline = (job) => {
        const deadlineDate = new Date(job.dedline);
        const currentDate = new Date();
        const deadlineTimeInMillis = deadlineDate.getTime();
        const currentTimeInMillis = currentDate.getTime();

        const timeDiffInMillis = deadlineTimeInMillis - currentTimeInMillis;

        const days = Math.floor(timeDiffInMillis / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiffInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiffInMillis % (1000 * 60 * 60)) / (1000 * 60));

        const remainingTime = `${days} days ${hours} hours ${minutes} minutes`;
        
        return remainingTime;
        // console.log(`Remaining time for job ${job.title}: ${remainingTime}`);
    }

    const [catImage, setCatImage] = useState([]);
    const [jobCategories, setJobCategories] = useState([]);
    const [visibleItem, setVisibleItem] = useState(4);
    const handleShowMore = () => {
        setVisibleItem((preVisibleItem) => preVisibleItem + 4);
    }

    const handleShowLess = ()=>{
       setVisibleItem((4));
    }

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCatImage(data)

            })

        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobCategories(data)
            })
    }, [])
    console.log(jobCategories);
    const graphicDesign = jobCategories.filter(eachCategory => eachCategory.category === "Graphics Design");
    console.log(graphicDesign);
    const digitalMarketing = jobCategories.filter(eachCategory => eachCategory.category === "Digital Marketing");
    const logoDesign = jobCategories.filter(eachCategory => eachCategory.category === "Logo Design");
    // const graphicDesign = jobCategories.filter(eachCategory => eachCategory.category === "Logo Design");
    const programming = jobCategories.filter(eachCategory => eachCategory.category === "Programming & Tech");

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="font-Montstreet text-[30px] font-[600] ">Explore Your Categories</h1>
                <p className="text-[20px] font-[500] text-slate-500 pt-[10px] ">Freelancing talent at your fingertips at a reasonable cost</p>
            </div>

            <div className="w-7xl mx-auto gap-5 mt-5">
                <Tabs>

                    <TabList className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3  rounded-2xl'>

                        {
                            catImage.map(eachCat => <Tab className=" shadow-2xl rounded-2xl " key={eachCat._id}>
                                <img className="w-full h-[200px] object-cover  rounded-t-2xl" src={eachCat.img_url} alt="" />
                                <h1 className="text-center font-Montstreet font-[500] text-[25px] pt-[10px]">{eachCat.title}</h1>
                            </Tab>)
                        }

                    </TabList>


                   
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[20px]">
                            {
                                graphicDesign.slice(0, visibleItem).map(eachItem => <a key={eachItem._id}
                                    href="#"
                                    className="shadow-green-600 shadow-2xl relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                                >
                                    <span
                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                    ></span>

                                    <div className="sm:flex sm:justify-between sm:gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                {eachItem.title}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Posted by <span className="text-red-500">{eachItem.bEmail}</span> </p>
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <p className="max-w-[40ch] text-sm text-gray-500">
                                            {eachItem.description}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="bg-slate-600 text-white w-[170px] px-[10px] rounded-lg">${eachItem.minPrice}-{eachItem.maxPrice} USD per hour </h1>
                                    </div>
                                    <dl className="mt-6 flex justify-between sm:gap-6">
                                        <div className="flex flex-col">
                                            <dt className="text-sm font-medium text-gray-600">Times left </dt>
                                            <dd className="text-xs text-gray-500">{jobDeadline(eachItem)} </dd>
                                        </div>

                                        <div className="flex flex-col-reverse">
                                            <Link to={`/jobDetails/${eachItem._id}`}>
                                                <button className="text-sm rounded-3xl w-[90px] font-medium p-[10px] bg-red-600 text-gray-300">Bid Now</button>
                                            </Link>

                                        </div>
                                    </dl>
                                </a>)
                            }
                        </div>
                        <div className="mt-[30px] flex justify-center items-center mx-auto">
                        {graphicDesign.length > visibleItem ? 
                                <button
                                    onClick={handleShowMore}
                                    className=" btn btn-outline btn-info"
                                >
                                    Show More
                                </button>:
                                 graphicDesign.length ===visibleItem ?
                                <button
                                onClick={handleShowLess}
                                className="hidden btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> : <button
                                onClick={handleShowLess}
                                className=" btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> 
                            }
                        </div>
                    </TabPanel>
                    
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[20px]">
                            {
                                logoDesign.slice(0, visibleItem).map(eachItem => <a key={eachItem._id}
                                    href="#"
                                    className="shadow-green-600 shadow-2xl relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                                >
                                    <span
                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                    ></span>

                                    <div className="sm:flex sm:justify-between sm:gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                {eachItem.title}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Posted by <span className="text-red-500">{eachItem.bEmail}</span> </p>
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <p className="max-w-[40ch] text-sm text-gray-500">
                                            {eachItem.description}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="bg-slate-600 text-white w-[170px] px-[10px] rounded-lg">${eachItem.minPrice}-{eachItem.maxPrice} USD per hour </h1>
                                    </div>
                                    <dl className="mt-6 flex justify-between sm:gap-6">
                                        <div className="flex flex-col">
                                            <dt className="text-sm font-medium text-gray-600">Times left </dt>
                                            <dd className="text-xs text-gray-500">{jobDeadline(eachItem)} </dd>
                                        </div>

                                        <div className="flex flex-col-reverse">
                                            <Link to={`/jobDetails/${eachItem._id}`}>
                                                <button className="text-sm rounded-3xl w-[90px] font-medium p-[10px] bg-red-600 text-gray-300">Bid Now</button>
                                            </Link>

                                        </div>
                                    </dl>
                                </a>)
                            }
                        </div>
                        <div className="mt-[30px] flex justify-center items-center mx-auto">
                            
                            {logoDesign.length > visibleItem ? 
                                <button
                                    onClick={handleShowMore}
                                    className=" btn btn-outline btn-info"
                                >
                                    Show More
                                </button>:
                                 logoDesign.length ===visibleItem ?
                                <button
                                onClick={handleShowLess}
                                className="hidden btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> : <button
                                onClick={handleShowLess}
                                className=" btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> 
                            }
                            
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[20px]">
                            {
                                programming.slice(0, visibleItem).map(eachItem => <a key={eachItem._id}
                                    href="#"
                                    className="shadow-green-600 shadow-2xl relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                                >
                                    <span
                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                    ></span>

                                    <div className="sm:flex sm:justify-between sm:gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                {eachItem.title}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Posted by <span className="text-red-500">{eachItem.bEmail}</span> </p>
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <p className="max-w-[40ch] text-sm text-gray-500">
                                            {eachItem.description}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="bg-slate-600 text-white w-[170px] px-[10px] rounded-lg">${eachItem.minPrice}-{eachItem.maxPrice} USD per hour </h1>
                                    </div>
                                    <dl className="mt-6 flex justify-between sm:gap-6">
                                        <div className="flex flex-col">
                                            <dt className="text-sm font-medium text-gray-600">Times left </dt>
                                            <dd className="text-xs text-gray-500">{jobDeadline(eachItem)} </dd>
                                        </div>

                                        <div className="flex flex-col-reverse">
                                            <Link to={`/jobDetails/${eachItem._id}`}>
                                                <button className="text-sm rounded-3xl w-[90px] font-medium p-[10px] bg-red-600 text-gray-300">Bid Now</button>
                                            </Link>

                                        </div>
                                    </dl>
                                </a>)
                            }
                        </div>
                        <div className="mt-[30px] flex justify-center items-center mx-auto">
                        {programming.length > visibleItem ? 
                                <button
                                    onClick={handleShowMore}
                                    className=" btn btn-outline btn-info"
                                >
                                    Show More
                                </button>:
                                 programming.length ===visibleItem ?
                                <button
                                onClick={handleShowLess}
                                className="hidden btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> : <button
                                onClick={handleShowLess}
                                className=" btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> 
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-[20px]">
                            {
                                digitalMarketing.slice(0, visibleItem).map(eachItem => <a key={eachItem._id}
                                    href="#"
                                    className="shadow-green-600 shadow-2xl relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                                >
                                    <span
                                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                                    ></span>

                                    <div className="sm:flex sm:justify-between sm:gap-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                                {eachItem.title}
                                            </h3>

                                            <p className="mt-1 text-xs font-medium text-gray-600">Posted by <span className="text-red-500">{eachItem.bEmail}</span> </p>
                                        </div>


                                    </div>

                                    <div className="mt-4">
                                        <p className="max-w-[40ch] text-sm text-gray-500">
                                            {eachItem.description}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <h1 className="bg-slate-600 text-white w-[170px] px-[10px] rounded-lg">${eachItem.minPrice}-{eachItem.maxPrice} USD per hour </h1>
                                    </div>
                                    <dl className="mt-6 flex justify-between sm:gap-6">
                                        <div className="flex flex-col">
                                            <dt className="text-sm font-medium text-gray-600">Times left </dt>
                                            <dd className="text-xs text-gray-500">{jobDeadline(eachItem)} </dd>
                                        </div>

                                        <div className="flex flex-col-reverse">
                                            <Link to={`/jobDetails/${eachItem._id}`}>
                                                <button className="text-sm rounded-3xl w-[90px] font-medium p-[10px] bg-red-600 text-gray-300">Bid Now</button>
                                            </Link>

                                        </div>
                                    </dl>
                                </a>)
                            }
                        </div>
                        <div className="mt-[30px] flex justify-center items-center mx-auto">
                            {digitalMarketing.length > visibleItem ? 
                                <button
                                    onClick={handleShowMore}
                                    className=" btn btn-outline btn-info"
                                >
                                    Show More
                                </button>:
                                 digitalMarketing.length ===visibleItem ?
                                <button
                                onClick={handleShowLess}
                                className="hidden btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> : <button
                                onClick={handleShowLess}
                                className=" btn btn-outline btn-secondary"
                                >
                                   Show Less
                                </button> 
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>


        </div>
    );
};

export default JobCategory;