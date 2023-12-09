import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Login & Register/Register";
import Login from "../Pages/Login & Register/Login";
import AddJob from "../Pages/AddJob/AddJob";
import EmployeerPlan from "../Pages/Home/EmployeerPlan";
import LatestB from "../Pages/Home/LatestB";
// import JobTabs from "../Pages/Home/JobTabs";
import MyJobs from "../Pages/Buyer/MyJobs";
import JobDetails from "../Pages/Buyer/JobDetails";
import MyBids from "../Pages/Buyer/MyBids";
import UpdateMyJob from "../Pages/Buyer/UpdateMyJob";
import BidsReq from "../Pages/Buyer/BidsReq";
import PrivateRoute from "../Pages/Login & Register/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
     {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'register',
      element:<Register></Register>
    },
    {
      path:'login',
      element: <Login></Login>
    },
    {
      path:'addjob',
      element:<PrivateRoute><AddJob></AddJob></PrivateRoute> 
    },
    {
      path:'employee',
      element: <EmployeerPlan></EmployeerPlan>
    },
    {
      path:'latest',
      element: <LatestB></LatestB>
    },
    
    {
      path:'myjob',
      element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
      loader: ()=>fetch('http://localhost:5000/jobs')
    },
    {
     path:'jobDetails/:id',
     element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute> ,
     loader:()=>fetch('http://localhost:5000/jobs')
    },
    {
      path:'myBids',
      element:<PrivateRoute><MyBids></MyBids></PrivateRoute> ,
      loader:()=>fetch('http://localhost:5000/bids')
    },
    {
      path:'updateJob/:id',
      element: <UpdateMyJob></UpdateMyJob>,
      loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
    },
    {
     path:'bidreq',
     element: <BidsReq></BidsReq>
    }

    ]
    },
  ]);

  export default router;