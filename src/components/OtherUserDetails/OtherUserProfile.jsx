import React, {  useEffect, useState } from "react";
import { useParams } from "react-router";

import UserDetails from "../UserProfile/UserDetails";
import "./OtherUser.css";
import OtherUserPosts from "./OtherUserPosts";

const OtherUserProfile = () => {
  const [userInfo, setUserInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchMyAPI = async () => {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        response = await response.json();
        setUserInfo(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMyAPI();
  }, []);

  const adress =
    userInfo?.address?.street +
    ", " +
    userInfo?.address?.suite +
    ", " +
    userInfo?.address?.city +
    "-" +
    userInfo?.address?.zipcode;

  return (
    <div id="user-info">
      <div className="container p-3 pt-4">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body m-2">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://i.imgur.com/CFpa3nK.jpg"
                          alt="Admin"
                          className="rounded-circle"
                          width="150"
                        />
                        <div className="mt-3">
                          <h4>{userInfo.name}</h4>
                          <p className="text-muted font-size-sm">
                            {userInfo.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <UserDetails profile={userInfo} adress={adress} />
              </div>
            </div>

            <div className="col-md-8">
              <OtherUserPosts id={id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherUserProfile;
