import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredAndSortedUsers = data.users
    ? data.users
        .filter(
          (user) =>
            user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
          switch (sortOption) {
            case "name":
              return (a.firstName + a.lastName).localeCompare(
                b.firstName + b.lastName
              );
            case "email":
              return a.email.localeCompare(b.email);
            case "company":
              return a.company.name.localeCompare(b.company.name);
            default:
              return 0;
          }
        })
    : [];

  const sortOptions = [
    { value: "name", label: "Sort by.." },
    { value: "name", label: "Sort by Name" },
    { value: "email", label: "Sort by Email" },
    { value: "company", label: "Sort by Company" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md me-3"
      />

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {data.users &&
          filteredAndSortedUsers.map((user) => (
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
