import React from 'react'
import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddMarathon from '../pages/AddMarathon';
import PrivetRout from '../context/Authcontext/PrivetRout';
import AllMarathonEvents from '../pages/AllMarathonEvents';
import MarathonDetailsPage from '../pages/MarathonDetailsPage';
import MyMarathonsList from '../pages/MyMarathonsList';
import ApplyMarathon from '../pages/ApplyMarathon';
import MyApplications from '../pages/MyApplications';
import Error from '../pages/Error';


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout></RootLayout>,
            children: [
                { 
                index: true, 
                element: <Home /> 
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/addmarathon",
                element:<PrivetRout>
                            <AddMarathon></AddMarathon>
                        </PrivetRout>
            },
            {
                path:"/allmarathon",
                element:<PrivetRout>
                            <AllMarathonEvents></AllMarathonEvents>
                        </PrivetRout>
            },
            // {
            //     path:"/marathondetails",
            //     element:<PrivetRout>
            //                 <MarathonDetailsPage></MarathonDetailsPage>
            //             </PrivetRout>
            // },
            {
                path:"/mymarathonlist",
                element:<PrivetRout>
                            <MyMarathonsList></MyMarathonsList>
                        </PrivetRout>
            },
            {
                path:"/marathon/:id",
                loader:({params})=>fetch(`https://assignment-11-server-ecru-five.vercel.app/marathon/${params.id}`),
                element:<PrivetRout>
                            <MarathonDetailsPage></MarathonDetailsPage>
                        </PrivetRout>
            },
            {
                path:"/applymarathon/:id",
                loader:({params})=>fetch(`https://assignment-11-server-ecru-five.vercel.app/marathon/${params.id}`),
                element:<PrivetRout>
                            <ApplyMarathon></ApplyMarathon>
                        </PrivetRout>
            },
            {
                path:"/myApplications",
                // loader:({params})=>fetch(`https://assignment-11-server-ecru-five.vercel.app//marathon/${params.id}`),
                element:<PrivetRout>
                            <MyApplications></MyApplications>
                        </PrivetRout>
            },


            ]
        },
        {
            path:"*",
            element:<Error></Error>
        }

]
)

export default router;