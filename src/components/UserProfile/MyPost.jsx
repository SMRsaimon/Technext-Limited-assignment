import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPost = ({userPost}) => {


    const [post, setPost] = useState(userPost);

    const hendelPostDelete=(id)=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          })
          .then(res=>{
            if (res.status !== 200) {
                return;
              } else {

                const remaingPost= post.filter((x) => x.id !== id);
                   
                setPost(remaingPost)
                   
                  
          }

    })

}



    return (
        <div className="container">
        {post.map((x) => (
          <>
            <div className="card my-3 p-3">
              <div className="card-title">
              
                <h4 className="text-center text-uppercase">{x.title}</h4>
              </div>
  
              <div className="card-body">
                <p>{x.body}</p>
              </div>
              <div>
              <button  onClick={()=>hendelPostDelete(x.id)} className="btn btn-danger">Delete Post</button> &nbsp;
              <button className="btn btn-outline-primary">Edit Post</button>&nbsp;
              <Link to={`/postDetails/${x.id}`} className="ms-auto">
                <button className="btn btn-outline-primary">Post Details</button>
              </Link>

              </div>
              
              
            </div>
          </>
        ))}
  
       
      </div>
    );
};

export default MyPost;