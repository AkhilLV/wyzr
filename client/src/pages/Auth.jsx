import { useEffect } from "react";
import googleIcon from "../assets/google-icon.jpg";

export default function Auth({ setUser }) {
  // useEffect(() => {
  //   const getUser = async () => {
  //     const res = await fetch("http://localhost:4000/auth/google/success", {
  //       credentials: "include",
  //     });
  //     if (res.status === 400) return console.log("auth_failed");

  //     const json = await res.json();
  //     setUser(json);
  //   };
  //   getUser();
  // }, []);

  return (
    <div>
      <button type="button">
        <img src={googleIcon} alt="google-icon" />
        <a href="http://localhost:4000/auth/google">Sign in with Google</a>
      </button>
    </div>
  );
}
