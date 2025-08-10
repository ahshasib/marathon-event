import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout