"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "../../../components/Header";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        "https://67ee2671c11d5ff4bf788157.mockapi.io/crud"
      );
      const data = await res.data;
      setData(data);
    };
    getUsers();
  }, []);

  const searchUsers = data.filter((user) =>
    user.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <Header setValue={setValue} />
      <div className="grid grid-cols-4 gap-15 px-10 mt-25">
        {searchUsers.length === 0 ? <h1>Not found :(</h1> : ""}
        {searchUsers &&
          searchUsers.map((user) => (
            <Link href={`/Users/${user.id}`} key={user.id}>
              <div className="shadow-sm rounded cursor-pointer">
                <Image
                  width={100}
                  height={100}
                  src={user.img}
                  alt={user.name}
                  className="rounded w-full"
                />
                <h1 className="text-center text-2xl py-2">{user.name}</h1>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default HomePage;
