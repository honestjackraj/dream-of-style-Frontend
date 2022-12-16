import React from "react";
import Adminlist from "../component/Adminlist";
import Adminform from "../component/Adminform";




function Admin() {
//   const [search, setSearch] = React.useState("");
  const [data, setdata] = React.useState({});
  const editdata = (data) => setdata(data);



  return (

    <>

      
      <div className="container-fluid m-2">
        <div className="row">
          <h4>User</h4>
        </div>
      </div>

      <div class="row ">
        <div class="col">
          <Adminlist editdata={editdata}  />
        </div>
        <div class="col">
          <Adminform data={data} />
        </div>

      </div>








    </>
  )
}
export default Admin