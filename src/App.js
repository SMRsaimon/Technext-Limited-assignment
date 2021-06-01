import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AllPost from "./components/AllPosts/AllPosts";
import PostDetails from "./components/PostDetails/PostDetails";
import UserProfile from "./components/UserProfile/UserProfile";
import ALLUsers from "./components/ALLUsers/ALLUsers";
import OtherUserProfile from "./components/OtherUserDetails/OtherUserProfile";


export const blogContext = createContext();



function App() {

  const [post, setPost] = useState([]);

useEffect(() => {
  async function fetchMyAPI() {
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      response = await response.json();
      setPost(response);
    } catch (err) {
      console.log(err);
    }
  }

  fetchMyAPI();
}, []);




  
  return (
    <blogContext.Provider value={{post,setPost}}>
  
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <UserProfile/>
          </Route>
          <Route path="/profile">
            <Navigation />
             <UserProfile/>
          </Route>
          <Route path="/AllPost">
            <Navigation />
            <AllPost/>
          </Route>
          <Route path="/AllUsers">
            <Navigation />
            <ALLUsers/>
          </Route>
          <Route path="/postDetails/:id">
            <Navigation />
             <PostDetails/>
          </Route>
          <Route path="/otherUser/userDetails/userID=:id">
            <Navigation />
             <OtherUserProfile/>
          </Route>
        </Switch>
      </Router>
     
    </blogContext.Provider>
  );
}

export default App;

// useEffect(() => {
//   async function fetchMyAPI() {
//     try {
//       let response = await fetch(
//         "https://resturant243.herokuapp.com/orderDetails"
//       );
//       response = await response.json();
//       setOrder(response);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   fetchMyAPI();
// }, []);
