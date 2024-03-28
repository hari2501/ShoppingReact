import { useState } from "react";
import '../Style/AdminSignUp.css' ;
import axios from 'axios';
const AdminSignUp = () => 
{
    let [name,setname]=useState("")
    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let[phone,setphone]=useState("")
    let[profile,setprofile]=useState("")
    let admins = {name,email,password,phone,profile}
    let addAdmin =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:1000/Manager',admins)
        .then((res)=>{
            console.log(res);
            alert("Admin added successfully")
        })
        .catch((err)=>{
            alert("Invalid data")
        })
    }
    return ( 
        <div className="Adminsignup">
            <form onSubmit={addAdmin}>
                <label>
                    Admin Name:
                    <input type="text" onChange={(e)=>(setname(e.target.value))} placeholder="Enter the name" />
                </label><br/>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e)=>(setemail(e.target.value))} placeholder="Enter the email" />
                </label><br/>
                <label>
                    password:
                    <input type="password" value={password} onChange={(e)=>(setpassword(e.target.value))} placeholder="Enter the password" />
                </label><br/>
                <label>
                    phone no:
                    <input type="tel" pattern="[0-9]{10}"value={phone} onChange={(e)=>(setphone(e.target.value))} placeholder="Enter the phoneno" />
                </label><br/>
                <label>
                    ProfileImgurl:
                    <input type="text" value={profile} onChange={(e)=>(setprofile(e.target.value))} placeholder="Enter the password" />
                </label>
                <br></br>
                    <button >submit</button>
            
                
            </form>
        </div>
     );
}
 
export default AdminSignUp;