import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyPost = (props) => {
  const { hendelPostDelete, posts , HendelPostEdit} = props;

  const [isEdit, setIsEdit] = useState(false);

  console.log(posts);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    HendelPostEdit(posts.id, evt.target.title.value, evt.target.body.value);
    setIsEdit(!isEdit);
  };

  return (
    <>
      {isEdit ? (

          <div className="card shadow-lg bg-dark p-4">

       
        <form className="form-group" onSubmit={handleOnEditSubmit}>
            <label className="text-light"  id="title" >Post Title: </label> <br/>
          <input type="text" placeholder="title" name="title" defaultValue={posts.title} required />
          <label  className="text-light" id="body" >Post Body: </label> <br/>
          <textarea type="text" placeholder="body" name="body" defaultValue={posts.body}  required/> &nbsp;
          <button className="btn btn-success" onSubmit={handleOnEditSubmit}>Save</button>
        </form>
        </div>
      ) : (
        <div className="card my-3 p-3">
          <div className="card-title">
            <h4 className="text-center text-uppercase">{posts.title}</h4>
          </div>

          <div className="card-body">
            <p>{posts.body}</p>
          </div>
          <div>
            <button
              onClick={() => hendelPostDelete(posts.id)}
              className="btn btn-danger"
            >
              Delete Post
            </button>{" "}
            &nbsp;
            <button onClick={handleEdit} className="btn btn-outline-primary">
              Edit Post
            </button>
            &nbsp;
            <Link to={`/postDetails/${posts.id}`} className="ms-auto">
              <button className="btn btn-outline-primary">Post Details</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPost;
