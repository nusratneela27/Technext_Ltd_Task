import React, { useState } from "react";

const UserForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: {
      address: "",
      city: "",
      postalCode: "",
    },
    company: {
      name: "",
    },
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      company: {
        ...prevData.company,
        [name]: value,
      },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: {
        address: "",
        city: "",
        postalCode: "",
      },
      company: {
        name: "",
      },
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Image:</span>
        <input
          type="text"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">First Name:</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Last Name:</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Email:</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Address:</span>
        <input
          type="text"
          name="address"
          value={formData.address.address}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">City:</span>
        <input
          type="text"
          name="city"
          value={formData.address.city}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Postal Code:</span>
        <input
          type="text"
          name="postalCode"
          value={formData.address.postalCode}
          onChange={handleAddressChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block">
        <span className="text-gray-700">Company Name:</span>
        <input
          type="text"
          name="name"
          value={formData.company.name}
          onChange={handleCompanyChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
