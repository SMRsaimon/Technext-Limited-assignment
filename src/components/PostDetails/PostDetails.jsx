import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogContext } from "../../App";
import "./PostDetails.css";

const PostDetails = () => {
  const { id } = useParams();
  const { post } = useContext(blogContext);
  const selectedPost = post.find((x) => x.id == id);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        response = await response.json();
        setPostComments(response);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <>
      {id > 100 ? (
        <>
          <div className="card p-5 container mt-5 pt-5">
            <h2>Post is under review </h2>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="card my-3 p-3">
                <div className="card-title">
                  <strong>User ID: {selectedPost?.userId}</strong>
                  <h4 className="text-center text-uppercase">
                    {selectedPost?.title}
                  </h4>
                </div>

                <div className="card-body">
                  <p>{selectedPost?.body}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h4>Comments</h4>
            <hr />

            {postComments.map((x) => (
              <>
                <div className="col-sm-5 col-md-8 col-12 pb-4">
                  <div className="comment mt-4 text-justify float-left">
                    <img
                      src="https://i.imgur.com/CFpa3nK.jpg"
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h4>{x.name}</h4> <span>- {x.email}</span> <br />
                    <p>{x.body}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default PostDetails;
