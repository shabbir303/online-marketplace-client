import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Login & Register/AuthProvider";


const BidsReq = () => {
    const [newStatus, setNewStatus] = useState('confirm');
    // const [documentId, setDocuementId] = useState('');
    const [upDatedDocument, setUpdatedDocument] = useState({});
    const { user } = useContext(AuthContext);
    const [approval, setApproval] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/bids')
            const data = await response.json();
            setApproval(data);
            // .then(res => res.json())
            // .then(data => {
            //     // console.log(data);
            //     //   setApproval(data); 

            const findApproval = data.filter(approval => approval.bEmail === user?.email);
            setApproval(findApproval);

        }
        fetchData();
    }, [user?.email])
    // console.log(approval);


    const documentId = approval.find(approval => approval?._id)

    // console.log(documentId._id);
    // console.log(approval);


    const handleStatus = async () => {
        try {
            const response = await fetch(`http://localhost:5000/updateStatus/${documentId?._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newStatus }),
            });

            if (response.ok) {
                const updatedDocument = await response.json();
                console.log('Document updated:', updatedDocument);
                setUpdatedDocument(updatedDocument);
            } else {
                console.error('Failed to update document:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error updating document:', error);
        }
    };
    console.log(upDatedDocument);

    // console.log(approval);
    return (
        <div className="max-w-7xl mx-auto my-[50px]">
            <h1 className="text-center mb-[20px] font-Montstreet font-[700] text-[30px]">Bid Request</h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Category & Project Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bidder Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Submission Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bid Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            approval.map(approval => <tr key={approval._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {approval.category}
                                    <h1 className="text-blue-600">{approval.title}</h1>
                                </th>
                                <td className="px-6 py-4">
                                    {approval.user}
                                </td>
                                <td className="px-6 py-4">
                                    {approval.myDate}
                                </td>
                                <td className="px-6 py-4">
                                    ${approval.bidAmount}
                                </td>
                                <td className="px-6 py-4">
                                    {documentId?.status}
                                </td>
                                <td className="px-6 py-4 grid grid-cols-1 gap-[10px]">
                                    {
                                        documentId.status === 'pending' ?
                                            <button onClick={handleStatus} className="font-medium bg-emerald-950 text-emerald-500 dark:text-emerald-500 hover:underline">Confirm</button> : <button className="disabled font-medium bg-emerald-950 text-emerald-500 dark:text-emerald-500 hover:underline">Confirmed</button>}
                                    <button onClick={() => setNewStatus('reject')}
                                        className="font-medium bg-red-950 text-red-500 dark:text-red-500 hover:underline"
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidsReq;




