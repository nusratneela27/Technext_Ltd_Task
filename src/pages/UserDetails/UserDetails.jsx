import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const [data, setData] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white shadow-md rounded-md p-4">
        <img
          src={data.image}
          alt="Avatar"
          className="w-56 h-56 rounded-md mb-4 md:ms-56"
        />
        <div className="text-base p-2 space-y-1">
          <h1 className="text-2xl font-semibold">
            Name: {data.firstName} {data.lastName}
          </h1>
          <p>Email: {data.email}</p>
          <p>
            Address:
            {data.address && data.address.address && (
              <span>{data.address.address}</span>
            )}
            {data.address && data.address.city && (
              <span>{data.address.city}</span>
            )}
            {data.address && data.address.postalCode && (
              <span>{data.address.postalCode}</span>
            )}
          </p>
          {data.company && <p>Company: {data.company.name}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
