import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "https://page-flow-server-side.vercel.app",
});

const useAxiosSecure = () => {
  const { user , logOutUser} = use(AuthContext);
  const navigate = useNavigate()
  //request handle
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    config.headers.email = user.email;
    return config;
  });

  // response
  axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error.status)
        if(error.status === 401 || error.status === 403){
          logOutUser().then(()=>{
            Swal.fire({
              title: `Unauthorize access!
              Please Login Again.`,
              icon: "error",
              draggable: true,
              timer: 2000,
            });
            navigate('/login')

            })
            .catch((err)=>console.log(err))
        }
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
