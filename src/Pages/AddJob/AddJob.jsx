import { useContext, useState } from "react";
import { AuthContext } from "../Login & Register/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const AddJob = () => {
    const { user } = useContext(AuthContext);
    // const [bEmail, setbEmail]= useState('');
    const bEmail = user?.email;
    const [title, setTitle] = useState('');
    const [dedline, setDeadline] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [minPrice, setMinPrice] = useState('');

    const reset = () => {

        setTitle('');
        setDeadline('');
        setCategory('');
        setMaxPrice('');
        setMinPrice('');
        setDescription('');
    }

    const handleAddJob = (e) => {
        e.preventDefault();
        const jobInfo = {
            bEmail,
            title,
            dedline,
            category,
            description,
            maxPrice,
            minPrice
        }
        console.log(jobInfo.bEmail, jobInfo.title, jobInfo.dedline, jobInfo.category, jobInfo.description, jobInfo.maxPrice, jobInfo.minPrice);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(jobInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged===true)
                {
                  toast.success('Successfully added a new job');
                  reset();
                }
            })
    }
    return (
        <div>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form onSubmit={handleAddJob}

                    className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-xl">Add Job</p>
                            <p className="text-md">Are you a Buyer? Post your Job here.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label
                                    // for="firstname" 
                                    className="text-sm">Employeer Email</label>
                                <input
                                    // id="firstname" 
                                    type="email"
                                    // value={bEmail} 
                                    defaultValue={user?.email}
                                    readOnly
                                    // onChange={e=>setbEmail(user?.email)}
                                    // placeholder="Email of the Employeer"
                                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 py-[5px] px-[10px]" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label
                                    // for="email"
                                    className="text-sm">Job Title</label>
                                <input
                                    // id="email" 
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-[10px]" />
                            </div>
                            <div className="col-span-full">
                                <label

                                    className="text-sm">Deadline</label>
                                <input

                                    type="date"
                                    placeholder=""
                                    value={dedline}
                                    onChange={e => setDeadline(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-[10px]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">

                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label
                                    // for="state" 
                                    className="text-sm">Description</label>
                                <input
                                    // id="state" 
                                    type="text"
                                    placeholder=""
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 py-[10px] px-[10px]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label
                                    // for="zip" 
                                    className="text-sm">Category</label>
                                <input
                                    list="category"
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    type="text"
                                    placeholder=""
                                    
                                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-[10px]" />
                                <datalist id="category">
                                    <option value="Digital Marketing" />
                                    <option value="Graphics Design" />
                                    <option value="Logo Design" />
                                    <option value="Programming & Tech" />
                                </datalist>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label
                                    // for="zip" 
                                    className="text-sm">Minimum Price</label>
                                <input
                                    // id="zip" 
                                    type="text"
                                    placeholder=""
                                    value={minPrice}
                                    onChange={e => setMinPrice(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-[10px]" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label
                                    // for="zip" 
                                    className="text-sm">Maximum Price</label>
                                <input
                                    // id="zip" 
                                    type="text"
                                    placeholder=""
                                    value={maxPrice}

                                    onChange={e => setMaxPrice(e.target.value)}
                                    className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900 px-[10px]" />
                            </div>
                            <div className="col-span-full sm:col-span-2 h-10 w-full min-w-[200px] flex justify-center items-center gap-[10px]">

                                <input
                                    type='submit'
                                    className=" h-full w-full rounded-[7px]    px-3 py-2.5 font-sans text-sm  text-blue-gray-700 transition-all bg-[#b02085] shadow-xl shadow-[#b02085]/50 text-white font-[600] "
                                    value="ADD YOUR JOB HERE"
                                />
                            </div>
                        </div>
                    </fieldset>
                    <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                </form>
            </section>
        </div>
    );
};

export default AddJob;