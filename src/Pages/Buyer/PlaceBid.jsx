/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Login & Register/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const PlaceBid = ({ jobDetails }) => {
    const { user } = useContext(AuthContext)
    const { bEmail, title, dedline, category, description } = jobDetails;
    console.log(jobDetails);
    const navigate = useNavigate();

    const [bidAmount, setBidAmount] = useState('');
    const [myDate, setDeadline] = useState('');
    // const [buyerEmail, setBuyerEmail] = useState('');
    // const [sEmail, setSemail] = useState('');

    const handleBid = (e) => {
        e.preventDefault();
        const bidderInfo = {
            bidAmount, myDate, bEmail, user: user?.email, title, dedline, category, description, status: 'pending'
        }
        console.log(bidderInfo.bidAmount, bidderInfo.myDate, bEmail, user?.email);

        fetch('http://localhost:5000/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidderInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('You successfully bid this job');
                    navigate('/myBids')
                }
            })
    }
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form onSubmit={handleBid}
                    // novalidate="" 
                    // action="" 
                    className="container flex flex-col mx-auto space-y-12">

                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium uppercase">Bidding form</p>
                            <p className="text-base">Fill this form carefully!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label
                                    // for="username" 
                                    className="text-sm">Your Bidding Amount</label>
                                <input
                                    name="bidAmount"
                                    // id="username" 
                                    value={bidAmount}
                                    onChange={e => setBidAmount(e.target.value)}
                                    type="text"
                                    placeholder="$"
                                    required
                                    className="w-full px-[10px] rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Your Project finish time</label>
                                <input
                                    // id="website" 
                                    required
                                    type="date"
                                    name="deadline"
                                    value={myDate}
                                    onChange={e => setDeadline(e.target.value)}
                                    // placeholder="your project finish time" 
                                    className="w-full px-[10px] rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Buyer Email</label>
                                <input
                                    // id="website" 
                                    name="buyerEmail"
                                    type="text"
                                    value={bEmail}
                                    readOnly
                                    // onChange={e => setBuyerEmail(e.target.value)}
                                    // placeholder="your project finish time" 
                                    className="w-full px-[10px] rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Your Email</label>
                                <input
                                    // id="website" 
                                    name="sEmail"
                                    type="text"
                                    defaultValue={user?.email}
                                    readOnly
                                    // onChange={e => setSemail(e.target.value)}
                                    // placeholder="your project finish time" 
                                    className="w-full px-[10px] rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full">

                                <div className="flex items-center space-x-2">

                                    {
                                        (user?.email === bEmail) ? "" :
                                            // <Link to='/myBids'>
                                                <button className=" px-4 py-2 border rounded-md bg-green-700 dark:border-gray-100">

                                                    Place your Bid
                                                </button>
                                            // </Link>
                                    }
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default PlaceBid;