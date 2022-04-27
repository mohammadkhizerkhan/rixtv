import {useState} from 'react'
import {useAuth} from "../context"
import {useNavigate,useLocation} from 'react-router-dom'

function SignUp() {
  const { signup, token } = useAuth();
  const location=useLocation();
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
    navigate(location?.state?.from?.pathname,{replace:true});
    setform({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };


  return (
    <>
      <div class="form-container">
        <h1 class="text-center">SIGNUP</h1>
        <form class="form">
          <label htmlFor="" class="input-label font-15">
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
          <label htmlFor="" class="input-label font-15">
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
          <label for="" class="input-label-row">
            <input type="checkbox" class="checkbox-input" />
            <span class="inputs-title font-15">I accept all Terms & Conditions</span>
          </label>
          <label htmlFor="" class="input-label text-center formBtn">
            <button
              type="submit"
              href=""
              onClick={(e) => signUpHandler(e)}
              className="btn btn-m primary-btn font-15"
            >
              SIGN UP
            </button>
          </label>
          <label htmlFor="" class="input-label text-center formBtn">
            <button
              type="button"
              href=""
              onClick={() => navigate("/login")}
              className="btn btn-m primary-btn font-15"
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
