import React from 'react';

const AddPosts = ({handleAddPost}) => {


    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        handleAddPost(evt.target.title.value, evt.target.body.value);
        evt.target.title.value = "";
        evt.target.body.value = "";
      };
    
    return (
        <div>
              <form className="form-group" onSubmit={handleOnSubmit}>
            <label  id="title" >Post Title: </label> <br/>
          <input type="text" placeholder="title" name="title" required />
          <label  id="body" >Post Body: </label> <br/>
          <textarea type="text" placeholder="body" name="body" required/> &nbsp;
          <button className="btn btn-success" onSubmit={handleOnSubmit}>Publish your post</button>
        </form>
            
        </div>
    );
};

export default AddPosts;