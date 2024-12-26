import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GoogleIcon from "@mui/icons-material/Google";
import UseLogin from "../../../Hooks/UseLogin";
export default function Login({ ChangeSetting }) {
    const { register , handleSubmit , onSubmit , errors } = UseLogin();
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="login__registre" id="login-in">
        <h1 className="login__title">Sign In</h1>
  
        <div className={errors.email ? 'inputError login__box w-100' : 'login__box w-100'}>
          <AlternateEmailIcon style={{color: errors.email && '#e35858'}} className="bx bx-at login__icon" />
          <input
            type="text"
            name="email"
            {...register("email")}
            placeholder="Email"
            className="login__input"
          />
        </div>
        <p className="error">{errors.email?.message}</p>
        <div className={errors.password ? 'inputError login__box w-100' : 'login__box w-100'}>
          <LockIcon style={{color: errors.password && '#e35858'}} className="bx bx-lock-alt login__icon" />
          <input
            type="password"
            name="password"
            {...register("password")}
            placeholder="Password"
            className="login__input"
          />
        </div>
        <p className="error">{errors.password?.message}</p>
        <span className="login__forgot">Forgot password?</span>
        <button className="login__button">Sign In</button>
        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>
        <div className="social-icons">
          <a href="a" aria-label="Log in with Google" className="icon">
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
