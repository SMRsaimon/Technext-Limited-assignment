import React from 'react';
import { Link } from 'react-router-dom';

const MyPost = ({userPost}) => {



    return (
        <div className="container">
        {userPost.map((x) => (
          <>
            <div className="card my-3 p-3">
              <div className="card-title">
              
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
  
       
      </div>
    );
};

export default MyPost;