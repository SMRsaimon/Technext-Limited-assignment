import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

import { Link } from "react-router-dom";
import { blogContext } from "../../App";

const OtherUserPosts = ({ id }) => {
  const { post } = useContext(blogContext);
  const selectedPost = post.filter((x) => x.userId == id);
  const [posts, setPosts] = useState(selectedPost.slice(0,2));


 useLayoutEffect(() => {


  
 }, []);




  const hendelPagination=(e)=>{

    switch (e.target.innerText) {
        case "1":
            const newPost=selectedPost.slice(0,2)
            setPosts([...newPost])
            break;
            case "2":
               const   newPost2=selectedPost.slice(2,4)
                setPosts([...newPost2])
                break;
                case "3":
                    const   newPost3=selectedPost.slice(4,6)
                     setPosts([...newPost3])
                     break;
                     case "4":
                        const   newPost4=selectedPost.slice(6,8)
                         setPosts([...newPost4])
                         break;
    
        default:
            const   remainingPost=selectedPost.slice(8,100)
                         setPosts([...remainingPost])
            break;
    }

  



  }

  return (
    <>
      {posts.map((x) => (
        <div className="card my-3 p-3">
          <div className="card-title">
            <h4 className="text-center text-uppercase">{x.title}</h4>
          </div>

          <div className="card-body">
            <p>{x.body}</p>
          </div>
          <Link to={`/postDetails/${x.id}`} className="ms-auto">
            <button className="btn btn-outline-primary">Post Details</button>
          </Link>
        </div>
      ))}
      <div className="container pagination-container"  onClick={hendelPagination}>
        <button>1</button>
         <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    </>
  );
};

export default OtherUserPosts;
