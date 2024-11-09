import { Link } from "react-router-dom";
import "./Header.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useDispatch, useSelector } from "react-redux";
import Components from "../../Style/Components/Components";
import { useTheme } from "@mui/material";
import { SetMode } from "../../Store/Mode/ModeSlice";
import { useState } from "react";
export default function Header() {
  const [ open , setOpen ] = useState(false)
  const theme = useTheme()
  const { MyComponentHeader} = Components();
  const dispatch = useDispatch();
  // change mode 
  const { value } = useSelector((state) => state.mode)
  function HandelNav(){
    setOpen(prev => !prev);
  }
  const [activeLink, setActiveLink] = useState('home');
  return (
    <MyComponentHeader className="header active">
      <div className="container">
        <a href="index" className="logo">
          <FitnessCenterIcon className="ion-icon" />
          <span style={{color:theme.palette.primary.title}} className="span">Fitlife</span>
        </a>

        <nav className={open ? (value === 'dark' ? 'navbar open dark' : 'navbar open light') : (value === 'dark'? "navbar dark" : 'navbar light')}>
          <ul className="navbar-list">
            <li onClick={()=>{setOpen(false)}}>
              <a href="#home" onClick={()=>{setActiveLink('home')}} className={activeLink === 'home' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                Home
              </a>{" "}
            </li>

            <li onClick={()=>{setOpen(false)}}>
              <a href="#about" onClick={()=>{setActiveLink('about')}} className={activeLink === 'about' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                About Us
              </a>{" "}
            </li>

            <li onClick={()=>{setOpen(false)}}>
              <a href="#goal" onClick={()=>{setActiveLink('goal')}} className={activeLink === 'goal' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                Goals
              </a>
            </li>

            <li onClick={()=>{setOpen(false)}}>
              <a  href="#plan" onClick={()=>{setActiveLink('plan')}} className={activeLink === 'plan' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                Plans
              </a>
            </li>

            <li onClick={()=>{setOpen(false)}}>
              <a  href="#contact" onClick={()=>{setActiveLink('contact')}} className={activeLink === 'contact' ? `navbar-link ${value} active` : `navbar-link ${value}`}>
                Contact Us
              </a>
            </li>
            <li onClick={()=>{setOpen(false)}}>
            <Link to="/login" className={`navbar-link ${value} btn-login`}>
                Login
              </Link>
            </li>
            <li onClick={()=>{setOpen(false)}}>
            <Select style={{display: 'flex' ,width: 'fit-content' , margin: 'auto'}} value={value} onChange={(event) => dispatch(SetMode(event.target.value))}>
              <MenuItem style={{color:theme.palette.primary.title}} value="light">light</MenuItem>
              <MenuItem style={{color:theme.palette.primary.title}} value="dark">dark</MenuItem>
            </Select>
            </li>
          </ul>
        </nav>
        <Link to="/login" className="btn btn-secondary">
          Join Now
        </Link>
        <button onClick={HandelNav} className="nav-open-btn">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </MyComponentHeader>
  );
}
