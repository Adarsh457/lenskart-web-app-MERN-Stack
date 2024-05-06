import API from "./API";
import { toast } from "react-toastify";

// Handle Login Func.
export const handleLogin = async (e, email, password) => {
  e.preventDefault();
  try {
    if (!email || !password) {
      return toast.error("Please fill the details");
    } else {
      const { data } = await API.post("/login", { email, password });
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        window.location.replace("/");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

// Handle Register Func.
export const handleRegister = async (
  e,
  userName,
  phoneNumber,
  email,
  password
) => {
  e.preventDefault();
  try {
    if (!email || !userName || !phoneNumber) {
      return toast.error("Please fill the details");
    } else {
      const { data } = await API.post("/register", {
        email,
        userName,
        phoneNumber,
        password,
      });
      if (data.success) {
        toast.success(data.message);
        window.location.replace("/login");
      } else {
        toast.error(data.message);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await API.get("/current-user");
    if (res?.data) {
      return res?.data;
    }
  } catch (error) {
    console.log(error);
  }
};
