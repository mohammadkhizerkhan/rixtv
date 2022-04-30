import React from "react";
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";

function User() {
  const {setToken, user, setUser } = useAuth();
  const navigate = useNavigate();

  const logOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("signup");
    setToken("");
    setUser();
    navigate("/home");
  };
  return (
    <>
      <div class="form-container">
        <div className="user">
          <div className="profile-logo-div">
        <svg width="4rem" height="4rem" viewBox="0 0 32 32"><path fill="#ffd300" d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5Z"></path><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0Z"></path></svg>
          </div>
        <div className="user-details">
            <h1>USER:</h1>
            <h2>{user.firstName}&nbsp;{user.lastName}</h2>
        </div>
        </div>
        <form class="form">
          <label htmlFor="" class="input-label text-center">
            <button
              type="submit"
              href=""
              onClick={(e) => logOutHandler(e)}
              className="btn btn-m primary-btn font-17 font-bold"
            >
              Log-out
            </button>
          </label>
        </form>
      </div>
    </>
  );
}

export default User;
