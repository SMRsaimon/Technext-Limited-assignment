import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { blogContext } from "../../App";
import "./AllPosts.css";

const AllPost = () => {
  const { post } = useContext(blogContext);

  const [morePost, setMorePost] = useState(10);

  const loadMorePost = () => {
    setMorePost(morePost + 10);
  };

  return (
    <div className="container">
      {post.slice(0, morePost).map((x) => (
        <>
          <div className="card my-3 p-3">
            <div className="card-title">
              <strong>User ID: {x.userId}</strong>
              <h4 className="text-center text-uppercase">{x.title}</h4>
            </div>

            <div className="card-body">
              <p>{x.body}</p>
            </div>
            <Link to={`/postDetails/${x.id}`} className="ms-auto">
              <button className="btn btn-outline-primary">post details</button>
            </Link>
          </div>
        </>
      ))}

      <div className="text-center mb-4">
        <button onClick={loadMorePost} className="btn btn-success">
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllPost;
