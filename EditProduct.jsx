import { useEffect, useState } from 'react'
import '../Style/Edit.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
  
const EditProduct = () => {
  let  [category , setcategory] =useState("")
  let [restaurant,setrestaurant] =useState("")
  let  [name , setname]=useState("")
  let [price , setprice]=useState("")
  let [ratings,setratings]=useState("")
  let [quantity,setquantity]=useState("")
  let [description,setdescription]=useState("")
  let [thumbnailurl,setthumbnailurl]=useState("")

  let param=useParams()
  console.log(param.id);

  useEffect(()=>{
    axios.get(`http://localhost:1000/Products/${param.id}`)
  .then((res)=>{
    console.log(res.data);
    setname(res.data.name)
    setcategory(res.data.category)
    setdescription(res.data.description)
    setprice(res.data.price)
    setquantity(res.data.quantity)
    setratings(res.data.ratings)
    setthumbnailurl(res.data.thumbnailurl)
    setrestaurant(res.data.restaurant)
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])
  let data={name,category,description,price,quantity,ratings,thumbnailurl,restaurant}
  
  let editItem = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:1000/Products/${param.id}`,data)
    .then((res)=>{
      alert("Updated Sucessfully")
    })
    .catch((err)=>{
      alert("Error in Updating data")
    })
  }
  return ( 
    <div className="edit">
      <form onSubmit={editItem}>
        <label>
          Category: <select value={category} onChange={(e)=>{setcategory(e.target.value)}}>
            <option>Starters</option>
            <option>Veg</option>
            <option>Non Veg</option>
            <option>Sea Food</option>
            <option>Breads</option>
            <option>Chinese</option>
            <option>Beverages</option>
            <option>Desserts</option>
          </select>
        </label>
        <br/>
        <label>
          Restaurant Name: <input required value={restaurant} onChange={(e)=>{setrestaurant(e.target.value)}} type="text" placeholder="Enter the restaurant name" />
        </label>
        <br/>
        <label>
          Dish Name: <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder="Enter the dish name" />
        </label>
        <br/>
        <label>
          Price: <input required value={price} onChange={(e)=>{setprice(e.target.value)}} type="text" placeholder="Enter the cost of the dish"/>
        </label>
        <br/>
        <label>
          Quantity: <input required value={quantity} onChange={(e)=>{setquantity(e.target.value)}} type="number"/>
        </label>
        <br/>
        <label>
          Description: <textarea required value={description} onChange={(e)=>{setdescription(e.target.value)}} cols="30" rows="2" placeholder="Enter the Special Receipes"/>
        </label>
        <br/>
        thumbnailUrl:<input required value={thumbnailurl} onChange={(e)=>{setthumbnailurl(e.target.value)}} type="text" placeholder="Enter the Image Url"/>
        <br/>
        <label>
          Ratings: <input required value={ratings} onChange={(e)=>{setratings(e.target.value)}} type="number"/>
        </label>
        <br/>
        <button>Submit</button>
      </form>
    </div>
   );
}
 
export default EditProduct;