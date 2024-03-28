import axios from "axios"
import {useEffect, useState} from "react"
import "../Style/AdminView.css"
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate} from "react-router-dom";
const AdminView = () => {
  let [data,setdata]=useState([])
  let [force,setforce]=useState(true);
  useEffect(()=>{
    axios.get(`http://localhost:1000/Products`)
    .then((res)=>{
      console.log(res.data);
      setdata(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[force])
  let removeDish=(id,name)=>{
    axios.delete(`http://localhost:1000/Products/${id}`)
    .then((res)=>{
      alert(name +" removed sucessfully")
      setforce(!force)
    })
    .catch((err)=>{
      alert("Data not found")
    })
  }
  let navigate =useNavigate()
  function editproduct(id){
    navigate(`/adminhomepage/editproduct/${id}`)
  }

  
  return ( 
    <div className="adminviewpage">
     {data.map((x)=>{
      return(
        <div class="displayproducts">
          <img src={x.thumbnailurl} alt="" />
          <div class="restaurant">
            <h4>{x.restaurant} ||</h4>
            <b>{x.ratings}<StarIcon id="star" /></b>
          </div>
          <span class="">{x.name}</span>
          <strike><p>MRP: ₹{x.price}.00</p></strike>
          <div class="desc">
            <span id="price">₹{x.price-x.price*20/100}</span>
            <div class="opt">
            <EditIcon onClick={()=>{editproduct(x.id)}}/>
          <DeleteIcon onClick={()=>{removeDish(x.id,x.name)}}/>
            </div>
          </div>
        </div>
      )
     })
     }

    </div>
   );
}
 
export default AdminView;