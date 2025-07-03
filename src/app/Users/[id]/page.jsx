import axios from "axios";
import UserDetail from "../../../../components/UserDetail";

const User = async ({ params }) => {
  const res = await axios.get(
    `https://67ee2671c11d5ff4bf788157.mockapi.io/crud/${params.id}`
  );
  const user = res.data;

  return <UserDetail user={user} />;
};

export default User;
