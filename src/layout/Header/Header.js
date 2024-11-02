import { Link } from "react-router-dom";
import "./Header.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useDispatch, useSelector } from "react-redux";
import Components from "../../Style/Components/Components";
import { useTheme } from "@mui/material";
import { SetMode } from "../../Store/Mode/ModeSlice";
export default function Header() {
  const theme = useTheme()
  const { MyComponentHeader} = Components();
  const dispatch = useDispatch();
  // change mode 
  const { value } = useSelector((state) => state.mode)
  return (
    <MyComponentHeader className="header active">
      <div className="container">
        <a href="index" className="logo">
          <FitnessCenterIcon className="ion-icon" />
          <span style={{color:theme.palette.primary.title}} className="span">Fitlife</span>
        </a>

        <nav className="navbar">
          <button className="nav-close-btn"></button>

          <ul className="navbar-list">
            <li>
              <Link  to="/#home" className={value === 'dark' ? "navbar-link dark active" : 'navbar-link light active'}>
                Home
              </Link>{" "}
            </li>

            <li>
              <Link to="/#about" className={value === 'dark' ? "navbar-link dark" : 'navbar-link light'}>
                About Us
              </Link>{" "}
            </li>

            <li>
              <Link to="/#class" className={value === 'dark' ? "navbar-link dark" : 'navbar-link light'}>
                classs
              </Link>
            </li>

            <li>
              <Link  to="/#blog" className={value === 'dark' ? "navbar-link dark" : "navbar-link light"}>
                Blog
              </Link>
            </li>

            <li>
              <Link  to="/" className={value === 'dark' ? "navbar-link dark" : "navbar-link light"}>
                Contact Us
              </Link>
            </li>
            <li>
            <Select value={value} onChange={(event) => dispatch(SetMode(event.target.value))}>
              <MenuItem style={{color:theme.palette.primary.title}} value="light">light</MenuItem>
              <MenuItem style={{color:theme.palette.primary.title}} value="dark">dark</MenuItem>
            </Select>
            </li>
          </ul>
        </nav>
        <Link to="/login" className="btn btn-secondary">
          Join Now
        </Link>
        <button className="nav-open-btn">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </MyComponentHeader>
  );
}
