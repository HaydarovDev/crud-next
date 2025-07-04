const UserDetail = ({ user }) => {
  return (
    <div className="p-10 flex flex-col justify-center items-center min-h-[100vh]">
      <img src={user.img} alt={user.name} className="w-[300px] my-5 rounded" />
      <h1 className="text-3xl font-bold">{user.name}</h1>
    </div>
  );
};

export default UserDetail;
