import { useState } from 'react'
import '../Style/AddProduct.css'
import axios from 'axios'
const AddProduct = () => {
  let  [category , setcategory] =useState("")
  let [restaurant,setrestaurant] =useState("")
  let  [name , setname]=useState("")
  let [price , setprice]=useState("")
  let [ratings,setratings]=useState("")
  let [quantity,setquantity]=useState("")
  let [description,setdescription]=useState("")
  let [thumbnailurl,setthumbnailurl]=useState("")

  let data = {category,restaurant,name,price,ratings,quantity,description,thumbnailurl}
    let addDish =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:1000/Products',data)
        .then((res)=>{
            console.log(res);
            alert("dish added successfully")
        })
        .catch((err)=>{
            alert("Invalid data")
        })
    }
  return ( 
    <div className="additem">
      <form onSubmit={addDish}>
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
        <button>Add Dish</button>
      </form>
    </div>
   );
}
 
export default AddProduct;