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
    { path: "/dashboard/userDataForm", label: "User Data Form" },
  ];
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Mobile Top Bar */}
      <div className="absolute bg-gray-700 lg:hidden flex justify-between w-full px-5 py-3 items-center z-50">
        <Link to="/" className="flex items-center gap-2">
          <img src="./cardio.png" alt="logo" className="w-10 rounded-md" />
          <h1 className="text-3xl text-white">MilesMaster</h1>
        </Link>
        <button className="p-4 text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="./cardio.png" alt="logo" className="w-10 rounded-md" />
            <h1 className="text-3xl text-black">MilesMaster</h1>
          </Link>
          {/* Close Button for Mobile */}
          <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(false)}>
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
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="lg:ml-64 p-10 lg:mt-0 overflow-y-auto"
        style={{ minHeight: "100vh" }}
      >
        <Outlet />
      </main>
    </div>
  );
}
