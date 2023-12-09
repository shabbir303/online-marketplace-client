import { useContext } from "react";
import { AuthContext } from "../Login & Register/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import UpdateMyJob from "./UpdateMyJob";
import Swal from "sweetalert2";

const MyJobs = () => {
    const [myJob, setMyJob] = useState([]);
    const { user } = useContext(AuthContext);
    const eachUserJob = useLoaderData();
    console.log(eachUserJob);

    useEffect(() => {
        const userPostedJob = eachUserJob.filter(jobs => jobs.bEmail === user?.email);
        setMyJob(userPostedJob);

    }, [eachUserJob, user?.email]);
    // console.log(myJob);
    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
    
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) { // Check if the user confirmed the deletion
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(result);
                    if (data.deletedCount > 0) {
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = myJob.filter(jobs => jobs._id !== id);
                        setMyJob(remaining);
                    } else {
                        // Handle the case where deletion was not successful
                        swalWithBootstrapButtons.fire({
                            title: "Error",
                            text: "Unable to delete the file.",
                            icon: "error"
                        });
                    }
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

       

    
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 mb-10 ">
            <h1 className="text-center text-[25px] bg-emerald-500 rounded-lg font-Montstreet font-[700]" >My Total Jobs are :{myJob.length} </h1>
            {
                myJob.map(jobs =>
                    <div key={jobs._id} className='overflow-hidden rounded-lg has-shadow.bolder shadow-2xl w-full p-4 flex flex-col gap-2 text-white bg-black'>
                        <div className='flex justify-between items-baseline'>
                            <h3 className='text-xl font-semibold'>
                                {jobs.category}
                            </h3>
                            <div className='text-xs'>
                                Job expire date • {jobs.dedline}
                                <br />Payment • ${jobs.minPrice}-${jobs.maxPrice}/per hour
                            </div>
                        </div>
                        <div className="flex items-center justify-between gap-[500px]">
                            <div className="flex-1" >
                                <h3 className='text-lg text-emerald-500 font-semibold'>
                                    {jobs.title}
                                </h3>
                                <p className='text-sm'>
                                    {jobs.description}💥
                                </p>
                            </div>

                            <div className="flex-1/2 ">
                                <div className="flex">
                                    <div className="ml-5">
                                        <Link to={`/updateJob/${jobs._id}`}>
                                            <button
                                                className="bg-cyan-600 px-[10px] rounded-lg block">
                                                UPDATE
                                            </button>
                                        </Link>
                                    </div>
                                    <button onClick={() => handleDelete(jobs._id)}
                                        className='bg-red-500 px-[10px] rounded-lg  ml-5'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>)
            }
        </div>
    );
};

export default MyJobs;