import '../Style/LandingPage.css';
import {Link} from "react-router-dom";
const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <div className="sub_lp">
         
            <Link to="/admin">
                <img id="i1" src="https://th.bing.com/th/id/OIP.TFYRg0rXeEwhSJmYJ5M7fwHaHa?rs=1&pid=ImgDetMain" alt=""></img>
               <h3> Admin</h3>
               </Link>
            <Link to="/user">
            <img id="i2" src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
             <h3>  User</h3> 
                </Link></div>
        </div>
     );
}
 
export default LandingPage;