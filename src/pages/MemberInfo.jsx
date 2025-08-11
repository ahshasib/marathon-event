import React from "react";
import { motion } from "framer-motion";

const members = [
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=10",
    address: "123 Marathon St, New York, NY",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    topRecord: "3:12:45",
  },
  {
    id: 2,
    name: "Sarah Lee",
    image: "https://i.pravatar.cc/150?img=11",
    address: "456 Runner Ave, San Francisco, CA",
    email: "sarah.lee@example.com",
    phone: "+1 (555) 987-6543",
    topRecord: "3:25:30",
  },
  {
    id: 3,
    name: "Mike Smith",
    image: "https://i.pravatar.cc/150?img=12",
    address: "789 Sprinter Rd, Chicago, IL",
    email: "mike.smith@example.com",
    phone: "+1 (555) 555-1212",
    topRecord: "3:05:10",
  },
  {
    id: 4,
    name: "Emily Clark",
    image: "https://i.pravatar.cc/150?img=13",
    address: "321 Marathon Blvd, Boston, MA",
    email: "emily.clark@example.com",
    phone: "+1 (555) 321-4321",
    topRecord: "3:40:22",
  },
];

const MemberInfo = () => {
  return (
    <div>
         <div className="py-8 bg-gray-500 w-full"></div>
        <main className="max-w-6xl mx-auto px-6 py-12">
       
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Marathon Members Information
      </h1>

      <div className="space-y-16">
        {members.map((member, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-xl object-cover shadow-lg border-4 border-indigo-500"
              />

              {/* Member Info */}
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl font-semibold text-indigo-700 mb-3">
                  {member.name}
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> {member.address}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${member.email}`}
                    className="text-indigo-600 underline"
                  >
                    {member.email}
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> {member.phone}
                </p>
                <p className="text-indigo-800 font-semibold text-lg mt-4">
                  Top Record: {member.topRecord}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </main>
    </div>
  );
};

export default MemberInfo;
