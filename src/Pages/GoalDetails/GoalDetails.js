import "./GoalDetails.css";
import Img1 from '../../img/blog-two.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Components from "../../Style/Components/Components";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const GoalDetails = () => {
    const { MyComponentTitle } = Components();
    
  return (
    <>
      <div className="card top">
      <div className="product-imgs">
      <div style={{justifyContent:'center' , display:'flex'}} className="img-display">
            <div style={{width:'100%' , height:'400px'}} className="img-showcase">
              <img style={{borderRadius:'50%' , width:'75%', minWidth:'400px' , objectFit:'contain'}} src={Img1} alt="shoe" />
          </div>
        </div>
      </div>
      <div className="product-content">
        <MyComponentTitle className="product-title">Goal Details</MyComponentTitle>
        <a href="index" className="product-link">
          goals in fitlife
        </a>

        <div className="product-detail">
          <h1 style={{padding:'1rem 0'}}>about this goal: </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, voluptates eligendi. Nihil eum ipsam magnam nesciunt quam praesentium laudantium id, libero sit cum consequuntur amet modi iusto voluptatum atque ut.</p>
          <ul>
            <li>
              <CheckCircleIcon />
              goal: <span>Burn fat</span>
            </li>
            <li>
              <CheckCircleIcon />
              calories: <span>500 to 1000</span>
            </li>
            <li>
              <CheckCircleIcon />
              <span>duration: 1 month</span>
            </li>
          </ul>
         
          <button className="btn_start" >Start Goal  <KeyboardDoubleArrowRightIcon /></button>
        </div>
      </div>
    </div>
    </>
  );
};
export default GoalDetails;
