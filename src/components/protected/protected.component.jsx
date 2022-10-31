import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ apiKey = undefined, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!apiKey && !process.env.REACT_APP_API_KEY) {
      navigate("/unauthorized");
    }

    if (apiKey !== process.env.REACT_APP_API_KEY) {
      navigate("/unauthorized");
    }
  }, [apiKey]);

  return children;
};

export default Protected;
