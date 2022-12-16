import React, { useState } from "react";
// import "../Component/cs/adminlist.css";
import axios from "axios";


function Adminform({ data }) {
 
  const[pro,setPro] = useState("");



  const handleChange = ({ target: { name, value } }) => {
    setPro({ ...pro, [name]: value });
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/products";
      const res = await axios.post(url, pro);
      console.log(res)
      
    } catch(error) {
         console.log(error)
    }
  }


  return (
    <>


      <div className="container-fluid">
        <div class=" bg-light">
        <form onSubmit={handlesubmit}>
          <div className="card">
            <br />
            
            <div class="form-group">
              <label for="product">Product<span className="text-danger">*</span></label>
              <input type="text"
                name="product"
                className="form-control"
                placeholder="Enter the product"
                value={data.image}
                required />
            </div>

            <div class="form-group">
              <label for="name">Name<span className="text-danger">*</span></label>
              <input type="text"
                name="name"
                className="form-control"
                placeholder="Enter the name"
                value={data.name}
                required />
            </div>

            <div class="form-group">
              <label for="price">Price<span className="text-danger">*</span></label>
              <input type="text"
                name="price"
                className="form-control"
                placeholder="Enter the price"
                value={data.price}
                required />
            </div>

            <div class="form-group">
              <label for="Availablity">Availablity<span className="text-danger">*</span></label>
              <input type="text"
                name="Availablity"
                className="form-control"
                placeholder="Enter the Availablity"
                value={data.Availablity}
                required />
            </div>
            <div class="form-group">
              <label for="Availablity">Color<span className="text-danger">*</span></label>
              <input type="text"
                name="Color"
                className="form-control"
                placeholder="Enter the Availablity"
                value={data.Color}
                required />
            </div>


            <div class="form-group">
              <button type="reset" className="btn btn-sm btn-secondary ">Reset</button>
              <button type="submit" className="btn btn-sm btn-success ">Save</button>
            </div>
          </div>
          </form>
        </div>
      
      </div>
      
    </>
  )
}

export default Adminform   