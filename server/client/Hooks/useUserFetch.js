import { useState, useEffect } from "react";

//axios
import axios from "axios";


const useUserFetch = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/Users");
        const data = await res.data;
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  console.log(userData);
  return { userData, error, isLoading,setIsLoading };
};
export default useUserFetch;
