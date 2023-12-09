import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Login & Register/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyBids = () => {
	const [bidUser, setBidUser] = useState([]);
	const { user } = useContext(AuthContext);
	const biddingUserInfo = useLoaderData();

	useEffect(() => {
		const myBiddings = biddingUserInfo.filter(bids => bids.user === user?.email);
		setBidUser(myBiddings);
	}, [biddingUserInfo, user?.email])
	return (
		<div>
			<div className="container p-2 mx-auto sm:p-4 text-gray-100">
				<h2 className="mb-4 text-3xl font-bold text-lime-600 leadi">My Bids Information</h2>
				<div className="overflow-x-auto">
					<table className="min-w-full text-xs">

						<thead className="bg-gray-700">
							<tr className="text-left">
								<th className="p-3">Job Title</th>
								<th className="p-3">Buyer Email</th>
								<th className="p-3">My Issued Date</th>
								<th className="p-3">Last Date of Bidding</th>
								<th className="p-3 text-right">My Bidding Amount</th>
								<th className="p-3 pr-4 text-right">Status</th>
							</tr>
						</thead>
						<tbody>
							{
								bidUser.map(bidUser =>
									<tr key={bidUser._id} className="border-b border-opacity-20 border-gray-700 bg-gray-900">
										<td className="p-3">
											<p>{bidUser.title} </p>
										</td>
										<td className="p-3">
											<p>{bidUser.bEmail} </p>
										</td>
										<td className="p-3">
											<p>{bidUser.myDate}</p>
											
										</td>
										<td className="p-3">
											<p>{bidUser.dedline}</p>
											
										</td>
										<td className="p-3 text-right">
											<p>${bidUser.bidAmount}</p>
										</td>
										<td className="p-3 text-right">
											<span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
												<span>{bidUser.status} </span>
											</span>
										</td>
									</tr>
								)
							}

						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyBids;





