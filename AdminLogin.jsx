import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Style/AdminLogin.css' 
import axios from "axios";

const AdminLogin = () => {
    let [uname,setuname]=useState("");
    console.log(uname);
    let [password,setpassword]=useState("");
    console.log(password);

    let[admin,setadmin]=useState([]);
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:1000/Manager')
        .then((res)=>{
        console.log(res.data);
        setadmin(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    function login(e) 
    {
        let a=false;
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        admin.map((x)=> {
            if(uname===x.email && password === x.password){
                alert("Logged in Successfully")
                a=true;
                navigate('/adminhomepage')
            }
        });
        if(a===false){
            alert("Invalid username or password");
        }
    }
    return (  
        <div className="AdminLogin">
            {/* <h1>AdminLogin</h1> */}
           <form>
            <label>
        username: <input type="text" value={uname} onChange={(e)=>{setuname(e.target.value)}} placeholder="Enter uname"/>
            </label><br></br>
            <label>
                Password: <input  type="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter password"/>
            </label><br />
            <button class="button-87" onClick={login}>Login</button>
            <p >Are you new to the page?<Link to="/adminsignup">SignUp now</Link></p>
           </form>
        </div>
    );
}
 
export default AdminLogin;