/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestB = () => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [])
    return (
        <div className="font-Montstreet mb-[100px]">
            <div className="text-center">
                <h1 className="text-[35px] font-[700]">Latest Blog News</h1>
                <p className="text-[18px] font-[400] text-slate-500">Trends and what are future techs to be master in</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 mt-5">
                {
                    blog.map(blog =>
                        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-100 dark:text-gray-900  ">
                            <img src={blog.image_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold tracki">{blog.title}</h2>
                                    <p className="dark:text-gray-900">{blog.description} </p>
                                </div>
                                <Link to='/blog'>
                                    <h1 className="text-[15px] font-[500] text-red-500">Read More</h1>
                                </Link>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default LatestB;