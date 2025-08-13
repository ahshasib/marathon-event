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
import BlogPage from '../pages/BlogPage';
import MemberInfo from '../pages/MemberInfo';
import DashboardLayout from '../pages/DashboardLayout';
import Overview from '../pages/Overview';
import UserDataForm from '../pages/UserDataForm';


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
                path:"/blog",
                element:<BlogPage></BlogPage>
            },
            {
                path:"/members",
                element:<MemberInfo></MemberInfo>
            },
            
            {
                path:"/allmarathon",
                element:
                            <AllMarathonEvents></AllMarathonEvents>
                       
            },
            // {
            //     path:"/marathondetails",
            //     element:<PrivetRout>
            //                 <MarathonDetailsPage></MarathonDetailsPage>
            //             </PrivetRout>
            // },
            
            {
                path:"/marathon/:id",
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/marathon/${params.id}`),
                element:
                            <MarathonDetailsPage></MarathonDetailsPage>
                        
            },
            {
                path:"/applymarathon/:id",
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/marathon/${params.id}`),
                element:<PrivetRout>
                            <ApplyMarathon></ApplyMarathon>
                        </PrivetRout>
            },
            
           
            


            ]
        },
        {
            path: "/dashboard",
            element: <DashboardLayout></DashboardLayout>,
            children:[
                {
                    path:"/dashboard/myApplications",
                    // loader:({params})=>fetch(`https://assignment-11-server-ecru-five.vercel.app//marathon/${params.id}`),
                    element:<PrivetRout>
                                <MyApplications></MyApplications>
                            </PrivetRout>
                },
                {
                    path:"/dashboard/mymarathonlist",
                    element:<PrivetRout>
                                <MyMarathonsList></MyMarathonsList>
                            </PrivetRout>
                },
                {
                    path:"/dashboard/addmarathon",
                    element:<PrivetRout>
                                <AddMarathon></AddMarathon>
                            </PrivetRout>
                },
                {
                    index:true,
                    element:<PrivetRout>
                                <Overview></Overview>
                            </PrivetRout>
                },
                {
                    path:"/dashboard/userDataForm",
                    element:<PrivetRout>
                                <UserDataForm></UserDataForm>
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