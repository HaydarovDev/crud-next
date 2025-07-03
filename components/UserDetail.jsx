"use client";
import axios from "axios";

const UserDetail = ({ user }) => {
  const deleteUser = () => {
    axios.delete(`https://67ee2671c11d5ff4bf788157.mockapi.io/crud/${user.id}`);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <img src={user.img} alt={user.name} className="w-[300px] my-5 rounded" />
      <button
        className="bg-white text-red-500 border-2 cursor-pointer px-3 py-2 rounded"
        onClick={deleteUser}
      >
        Delete user
      </button>
    </div>
  );
};

export default UserDetail;
