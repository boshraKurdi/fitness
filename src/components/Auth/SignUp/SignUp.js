import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GoogleIcon from "@mui/icons-material/Google";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import UseSignUp from "../../../Hooks/UseSignUp";
export default function SignUp({ ChangeSetting }) {
  const { onSubmit , errors , handleSubmit , register } = UseSignUp()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login__create" id="login-up">
      <h1 className="login__title">Create Account</h1>
      <div className="box_flex">
        <div className="box w-100">
          <div className={errors.name ? 'inputError login__box' : 'login__box'}>
            <AccountCircleIcon style={{color: errors.name && '#e35858'}} className="bx bx-user login__icon" />
            <input
              type="text"
              name="name"
              placeholder="Username"
              {...register("name")}
              className="login__input"
            />
          </div>
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="box w-100">
          <div style={{position: 'relative'}} className={(errors.email ) ? 'inputError login__box' : 'login__box'}>
            <AlternateEmailIcon style={{color: (errors.email) && '#e35858'}} className="bx bx-at login__icon" />
            <input
              type="text"
              name="email"
              {...register("email")}
              placeholder="Email"
              className="login__input"
            />
          </div>
          <p className="error">{errors.email ? errors.email.message :'' }</p>
        </div>
        <div className="box">
          <div className={errors.password ? 'inputError login__box' : 'login__box'}>
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
        </div>
        <div className="box">
          <div className={errors.confirm ? 'inputError login__box' : 'login__box'}>
            <LockIcon style={{color: errors.confirm && '#e35858'}} className="bx bx-lock-alt login__icon" />
            <input
              type="password"
              name="confirm"
              {...register("confirm")}
              placeholder="confirm Password"
              className="login__input"
            />
          </div>
          <p className="error">{errors.confirm?.message}</p>
        </div>
      </div>
      <button className="login__button">Sign Up</button>
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
