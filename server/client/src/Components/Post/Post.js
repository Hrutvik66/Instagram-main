import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

//components
import Navbar from "../Navbar/Navbar";
import CroppedImageUpload from "../CroppedImageUPload/CroppedImageUpload";

function Post() {
  const [userData, setUserData] = useState({});
  const History = useNavigate();

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await axios.get("/Profile");
        setUserData(res.data);
      }
      fetchData();
    } catch (err) {
      History("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <CroppedImageUpload />
      </div>
    </div>
  );
}

export default Post;
