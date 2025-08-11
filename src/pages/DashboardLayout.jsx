import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { Menu, X } from "lucide-react";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/dashboard", label: "Overview" },
    { path: "/dashboard/mymarathonlist", label: "My Marathons" },
    { path: "/dashboard/myApplications", label: "My Applications" },
    { path: "/dashboard/addmarathon", label: "Add Marathon" },
  ];

  return (
    <div className="relative flex min-h-screen bg-gray-100">
        
      {/* Mobile Menu Button */}
     <div className="absolute bg-gray-700 lg:hidden flex justify-between w-full px-5 py-3 items-center">
    
            <Link to="/" className=" flex items-center gap-2">
              <img src="./cardio.png" alt="logo" className="w-10 rounded-md" />
              <h1 className="text-3xl text-white">MilesMaster</h1>
            </Link>
            <button
        className="  p-4 text-white"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>
     </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:h-auto`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-600">My Marathon</h2>
          {/* Close Button for Mobile */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="mt-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `block px-6 py-3 font-medium transition ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 mt-20 lg:mt-0 overflow-y-auto lg:ml-0">
        <Outlet />
      </main>
    </div>
  );
}
