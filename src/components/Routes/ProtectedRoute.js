import React, { useEffect, useCallback, useContext } from "react";
import API from "../../services/API";
import { getCurrentUser } from "../../services/authServices";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../context-and-reducer/StoreContext";

const ProtectedRoute = ({ children }) => {
  const { dispatch } = useContext(StoreContext);

  const getUser = useCallback(async () => {
    try {
      const { data } = await API.get("/current-user");

      if (data?.success) {
        dispatch({
          type: "CURRENTUSERS",
          payload: data.user,
        });
        getCurrentUser(data);
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
