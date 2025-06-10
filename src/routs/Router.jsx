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

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: RootLayout,
            children: [
                { 
                index: true, 
                element: <Home /> 
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:"/register",
                Component:Register
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
            {
                path:"/marathondetails",
                element:<PrivetRout>
                            <MarathonDetailsPage></MarathonDetailsPage>
                        </PrivetRout>
            },
            {
                path:"/mymarathonlist",
                element:<PrivetRout>
                            <MyMarathonsList></MyMarathonsList>
                        </PrivetRout>
            },
            {
                path:"/marathon/:id",
                loader:({params})=>fetch(`http://localhost:3000/marathon/${params.id}`),
                element:<PrivetRout>
                            <MarathonDetailsPage></MarathonDetailsPage>
                        </PrivetRout>
            },
            {
                path:"/applymarathon/:id",
                loader:({params})=>fetch(`http://localhost:3000/marathon/${params.id}`),
                element:<PrivetRout>
                            <ApplyMarathon></ApplyMarathon>
                        </PrivetRout>
            },
            {
                path:"/myApplications",
                // loader:({params})=>fetch(`http://localhost:3000/marathon/${params.id}`),
                element:<PrivetRout>
                            <MyApplications></MyApplications>
                        </PrivetRout>
            },


            ]
        }

]
)

export default router;