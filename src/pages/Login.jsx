import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { CheckAccount } from "../services";

function Login() {
  const { login, token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setform({ ...form, [name]: value });
  };

  // console.log(location);
  console.log(location?.state?.from);

  const fillTestCredentials=(e)=>{
    setform({
      email: "test@gmail.com",
      password: "test123",
    })
  }

  const loginHandler = (e) => {
    e.preventDefault();
    login(form.email, form.password);
  };


  return (
    <>
      <div class="form-container">
        <h1 class="text-center">LOGIN</h1>
        <form class="form">
          <label htmlFor="" class="input-label font-15">
            Email address:
            <input
              type="email"
              placeholder="Enter your email here"
              class="input"
              value={form.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" class="input-label font-15">
            Password:
            <input
              type="password"
              placeholder="*************"
              class="input"
              value={form.password}
              name="password"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" class="input-label-row">
            <input type="checkbox" class="checkbox-input" />
            <span class="inputs-title font-15">Remember me</span>
            <span class="login-forgot-link">
              <a href="" class="font-15">Forgot your Password?</a>
            </span>
          </label>
          <label htmlFor="" class="input-label text-center">
            <button
              type="button"
              href=""
              className="btn btn-m primary-btn font-15"
              onClick={fillTestCredentials}
            >
              Fill with Test Credentials
            </button>
          </label>
          <label htmlFor="" class="input-label text-center">
            <button
              type="button"
              href="/components/auth/signUp.html"
              className="btn btn-m primary-btn font-15"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </button>
          </label>
          <label htmlFor="" class="input-label text-center">
            <button type="submit" className="btn btn-m primary-btn font-15" onClick={(e) => loginHandler(e)}>login</button>
          </label>
        </form>
      </div>
    </>
  );
}

export default Login;
