import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GoogleIcon from "@mui/icons-material/Google";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function SignUp({ ChangeSetting }) {

  return (
    <form className="login__create" id="login-up">
      <h1 className="login__title">Create Account</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div className='login__box'>
            <AccountCircleIcon className="bx bx-user login__icon" />
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="login__input"
            />
          </div>
        </div>
        <div className="box w-100">
          <div className='login__box'>
        <AlternateEmailIcon  className="bx bx-at login__icon" />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="login__input"
            />
            </div>
          </div>
        <div className="box">
          <div className='login__box'>
            <LockIcon className="bx bx-lock-alt login__icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login__input"
            />
          </div>
        </div>
        <div className="box">
          <div className='login__box'>
            <LockIcon className="bx bx-lock-alt login__icon" />
            <input
              type="password"
              name="confirm"
              placeholder="confirm Password"
              className="login__input"
            />
          </div>
        </div>
        </div>
      <button className="login__button" >Sign Up</button>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Login with social accounts</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <a
          href="a"
          aria-label="Log in with Google"
          className="icon"
        >
          <GoogleIcon />
        </a>
      </div>
      <div>
        <span className="login__account">Already have an Account ?</span>
        <span onClick={ChangeSetting} className="login__signup" id="sign-in">
          Sign In
        </span>
      </div>
    </form>
  );
}
