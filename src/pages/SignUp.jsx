import {useState} from 'react'
import {useAuth} from "../context"
import {useNavigate} from 'react-router-dom'

function SignUp() {
  const { signup, token } = useAuth();
  const navigate = useNavigate();
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setform({ ...form, [name]: value });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    if (form.firstname && form.lastname && form.email && form.password) {
      signup(form);
    }
    setform({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  if (token) {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }

  return (
    <>
      <div class="form-container">
        <h1 class="text-center">SIGNUP</h1>
        <form class="form">
          <label htmlFor="" class="input-label">
            First name:
            <input
              type="text"
              placeholder="Enter your first name here"
              class="input"
              value={form.firstname}
              name="firstname"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" class="input-label">
            last name:
            <input
              type="text"
              placeholder="Enter your last name here"
              class="input"
              value={form.lastname}
              name="lastname"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" class="input-label">
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
          <label htmlFor="" class="input-label">
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
          <label for="" class="input-label-row">
            <input type="checkbox" class="checkbox-input" />
            <span class="inputs-title">I accept all Terms & Conditions</span>
          </label>
          <label htmlFor="" class="input-label text-center formBtn">
            <button
              type="submit"
              href=""
              onClick={(e) => signUpHandler(e)}
              class="btn-link formBtn"
            >
              SIGN UP
            </button>
          </label>
          <label htmlFor="" class="input-label text-center formBtn">
            <button
              type="button"
              href=""
              onClick={() => navigate("/login")}
              class="btn-link formBtn"
            >
              Already Have An Account
            </button>
          </label>
        </form>
      </div>
    </>
  );
}

export default SignUp;
