import React, { useContext, useEffect, useState } from "react";
import { blogContext } from "../../App";
import MyPost from "./MyPost";
import UserDetails from "./UserDetails";
import "./UserProfile.css";

const UserProfile = () => {
  const [userPost, setUserPost] = useState([]);
  const [profile, setProfile] = useState({});
  

  const [profileDetails, setProfileDetails] = useState(true);
  const { post } = useContext(blogContext);
  const adress =
    profile?.address?.street +
    ", " +
    profile?.address?.suite +
    ", " +
    profile?.address?.city +
    "-" +
    profile?.address?.zipcode;

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/users/2"
        );
        response = await response.json();
        setProfile(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMyAPI();
  }, []);


  const hendelPostDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status !== 200) {
        return;
      } else {
        const remaingPost = post.filter((x) => x.id !== id);

        setUserPost(remaingPost);
      }
    });
  };


  const HendelPostEdit = async (id, title, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {

        console.log(data)
       
        const updatedPosts= userPost.map((x) => {
          if (x.id === id) {
            x.title = title;
            x.body = body;
          }

          return x;
        });

        setUserPost((userPost) => updatedPosts);
      })
      .catch((error) => console.log(error));
  };


  const hendelProfileDetails=()=>{

    setProfileDetails(!profileDetails)
    setUserPost([])
  }
  const HendelMyPost = (id) => {
    

    const userPosts = post.filter((x) => x.userId == id);
    setUserPost(userPosts);
    setProfileDetails(false);
  };

  return (
    <div id="user-info">
      <div className="container p-3 pt-4">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
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
                      <h4>{profile.name}</h4>
                      <p className="text-muted font-size-sm">{adress}</p>
                    </div>
                    <div className="">
                      <button
                        onClick={() => HendelMyPost(profile.id)}
                        className="btn btn-outline-primary"
                      >
                        My Posts
                      </button>{" "}
                      &nbsp;
                      <button className="btn btn-outline-primary">
                        ADD New Post
                      </button>
                      &nbsp;
                      {profileDetails === false ? (
                        <button
                          onClick={hendelProfileDetails}
                          className="btn btn-primary"
                        >
                          Profile Details
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              {profileDetails ? (
                <UserDetails profile={profile} adress={adress} />
              ) : (
                ""
              )}
              {userPost.length !== 0 ? (
                <div className="container">
                  {
                       userPost.map(x=> <MyPost posts={x} HendelPostEdit={HendelPostEdit} hendelPostDelete={hendelPostDelete}  />)

                  }
                 
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
