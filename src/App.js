import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";

export const userContext = createContext();



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
    <userContext.Provider value={{post,setPost}}>
  
      <Router>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Home/>
          </Route>
          <Route path="/home">
            <Navigation />
            <Home/>
          </Route>
        </Switch>
      </Router>
     
    </userContext.Provider>
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
