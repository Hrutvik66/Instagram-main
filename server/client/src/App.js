import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LoginPage/Login";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import AllComments from "./Components/AllComments/AllComments";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/home">
          <Home />
        </Route> */}
        {/* <Route path="/profile">
          <Profile />
        </Route> */}
        <Route path="/post" element={<Post />} />
        <Route path="/allComments/:idOfPost" element={<AllComments />} />
      </Routes>
    </Router>
  );
};
export default App;
