import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GoogleIcon from "@mui/icons-material/Google";
export default function Login({ ChangeSetting }) {
  return (
    <form  className="login__registre" id="login-in">
      <h1 className="login__title">Sign In</h1>

      <div className='login__box w-100'>
        <AlternateEmailIcon  className="bx bx-at login__icon" />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="login__input"
        />
      </div>
      <div className='login__box w-100'>
        <LockIcon className="bx bx-lock-alt login__icon" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="login__input"
        />
      </div>
      <span className="login__forgot">Forgot password?</span>
      <button className="login__button">Sign In</button>
      <div className="social-message">
        <div className="line"></div>
        <p className="message">Login with social accounts</p>
        <div className="line"></div>
      </div>
      <div className="social-icons">
        <a href="#" aria-label="Log in with Google" className="icon">
          <GoogleIcon />
        </a>
      </div>
      <div>
        <span className="login__account">Don't have an Account ?</span>
        <span onClick={ChangeSetting} className="login__signin" id="sign-up">
          Sign Up
        </span>
      </div>
    </form>
  );
}
