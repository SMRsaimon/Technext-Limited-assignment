import React, { useEffect, useState } from "react";
import "./ALLUsers.css";
import UserTable from "./UserTable";

const ALLUsers = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        response = await response.json();
        setUser(response);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);
  //   ascending,
  const ascending = (type) => {
    if (type === "name") {
      let ASCbyName = user.sort((f, s) => f.name.length - s.name.length);

      setUser([...ASCbyName]);
    }
    if (type === "email") {
      let ASCbyEmail = user.sort((f, s) => f.email.length - s.email.length);

      setUser([...ASCbyEmail]);
    }
  };

  //   descending
  const descending = (type) => {
    if (type === "name") {
      let DECbyName = user.sort((f, s) => s.name.length - f.name.length);
      setUser([...DECbyName]);
    }
    if (type === "email") {
      let DECbyEmail = user.sort((f, s) => s.email.length - f.email.length);
      setUser([...DECbyEmail]);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-3"> Users List </h2>

        <div className="row">
          <div className="col-md-10 offset-md-1 mt-5">
            <UserTable
              ascending={ascending}
              descending={descending}
              user={user}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ALLUsers;
