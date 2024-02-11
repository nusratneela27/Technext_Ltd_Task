import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-stone-800 mt-5 mb-5">
        All user : {data.users ? data.users.length : 0}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {data.users &&
          data.users.map((user) => (
            <div key={user.id} className="bg-white shadow-md rounded-md p-4">
              <img
                src={user.image}
                alt="Avatar"
                className="w-full rounded-md mb-4"
              />
              <div className="text-xl p-3 space-y-1">
                <Link to={`/${user.id}`}>
                  <h1 className="text-2xl font-semibold">
                    Name: {user.firstName} {user.lastName}
                  </h1>
                </Link>
                <p>Email: {user.email}</p>
                <p>
                  Address: {user.address.address} {user.address.city}{" "}
                  {user.address.postalCode}
                </p>
                <p>Company: {user.company.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users;

// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";

// const Users = () => {
//   const loadData = useLoaderData();
//   const [data, setData] = useState(loadData);
//   console.log(loadData);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
//       {data.users.map((user) => (
//         <div key={user.id}>
//           <div className="card w-96 bg-base-100 shadow-xl">
//             <img src={user.image} />
//             <h1>
//               Name: {user.firstName} {user.lastName}
//             </h1>
//             <p>Email: {user.email}</p>
//             <p>Address: {user.address.address}</p>
//             <p>City: {user.address.city}</p>
//             <h1></h1>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;
