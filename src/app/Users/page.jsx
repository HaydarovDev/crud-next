import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const res = await axios.get(
    "https://67ee2671c11d5ff4bf788157.mockapi.io/crud"
  );

  const data = res.data;

  return (
    <div className="grid grid-cols-4 gap-15 px-10">
      {data.map((user) => {
        return (
          <Link href={`/Users/${user.id}`} key={user.id}>
            <div className="shadow-sm rounded cursor-pointer">
              <Image
                width={100}
                height={30}
                src={user.img}
                alt=""
                className="rounded w-full"
              />
              <h1 className="text-center text-2xl py-2">{user.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default HomePage;
