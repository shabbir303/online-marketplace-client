import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PlaceBid from "./PlaceBid";


const JobDetails = () => {
    const [eachDetails, setDetails] = useState([])
    const { id } = useParams();
    const jobDetails = useLoaderData();

    const jobDeadline =(job)=>{
        const deadlineDate = new Date(job.dedline);
            const currentDate = new Date();
            const deadlineTimeInMillis = deadlineDate.getTime();
            const currentTimeInMillis = currentDate.getTime();

            const timeDiffInMillis = deadlineTimeInMillis - currentTimeInMillis;

            const days = Math.floor(timeDiffInMillis / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiffInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiffInMillis % (1000 * 60 * 60)) / (1000 * 60));

            const remainingTime = `${days} days ${hours} hours ${minutes} minutes`;
            // remainingTimes.push(remainingTime);
                // setRemainingTime(remainingTime)
                // job.setRemaining=remainingTime;
              return remainingTime;
            // console.log(`Remaining time for job ${job.title}: ${remainingTime}`);
    }

    useEffect(() => {
        const findDetails = jobDetails.find(details => details._id === id);
        setDetails(findDetails);
    }, [id, jobDetails]);
    console.log(eachDetails);
    return (
        <div className="max-w-5xl mx-auto mt-[50px] mb-[100px]">
            <a
                href="#"
                className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 sm:text-xl">
                            Project Details
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">By {eachDetails.bEmail}</p>
                    </div>

                      
                    <div className="hidden sm:block sm:shrink-0">
                        <h1 className="text-lg font-bold text-gray-900 sm:text-xl">${eachDetails.minPrice}-{eachDetails.maxPrice} USD per hour </h1>
                        <div className="flex flex-row-reverse items-center gap-2">
                        <dt className="text-sm font-medium text-gray-500">remaining</dt>
                        <dd className="text-sm font-medium text-pink-500">{jobDeadline(eachDetails)} </dd>
                    </div>
                    </div>
                </div>

                <div className="mt-4">
                <h3 className="text-3xl font-bold text-gray-900 sm:text-xl">
                            {eachDetails.title}
                        </h3> 
                </div>
                <div className="mt-4 flex justify-between">
                    <p className="max-w-[60ch] text-lg text-gray-500">
                        {eachDetails.description}
                    </p>
                   
                </div>

               
            </a>
            <div className="mt-[50px]">
                <PlaceBid  jobDetails={eachDetails}></PlaceBid>
            </div>
        </div>
    );
};

export default JobDetails;