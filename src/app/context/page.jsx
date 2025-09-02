"use client";


import { loginUser, registerService } from "@/app/services/authApi";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { getBlog } from "../services/blog";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [userType, setUserType] = useState("user")
    const [blogData, setBlogData] = useState([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    registeredType: "user", // 👈 default user
    city: "",
    brandName: "",
    vendorType: "",
  })
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  })



  //   sumbit register form
  const registerHandleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await registerService(formData);
      console.log(result);

      if (result?.success) {
        toast.success("Registered successfully!");
        console.log("Registered successfully!");


        setFormData({});
      } else {
        toast.error(result.message || "Registration failed");
      }
    } catch (error) {
      // ✅ This handles unexpected server errors or non-JSON responses
      const message = error?.response?.data?.message || error.message || "Something went wrong";
      toast.error(message);
    }
  };


  // login data
  const loginHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser(loginFormData);
      if (result?.success) {
        toast.success("Login successful!");
        console.log("Login successful!");

        router.push("/");
      } else {
        toast.error(result.message || "Login failed");
      }
    } catch (error) {
      // ✅ This handles unexpected server errors or non-JSON responses
      const message = error?.response?.data?.message || error.message || "Something went wrong";
      toast.error(message);
    }
  };

  // blog 

  const getBlogData = async () => {
    const data = await getBlog()
    if (data) {

      setBlogData(data.data)

    }
  }
  useEffect(() => {
    getBlogData()
  }, [])


  

  return (
    <AuthContext.Provider
      value={{

        registerHandleSubmit,
        userType,
        setUserType,
        formData,
        setFormData,
        loginHandleSubmit,
        loginFormData,
        setLoginFormData,
        Toaster,
        blogData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
