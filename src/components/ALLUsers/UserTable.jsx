import React from "react";
import { Link } from "react-router-dom";

const UserTable = ({ user, ascending, descending }) => {



    console.log(user)
  return (
    <div>
      <table id="customers">
        <tr>
          <th>Name &nbsp; <button onClick={()=>ascending("name")} className="custom-table-btn" >Ascending</button> &nbsp;
          <button onClick={()=>descending("name")}  className="custom-table-btn" >Descending</button> </th>
          <th>Email &nbsp; <button onClick={()=>ascending("email")} className="custom-table-btn" >Ascending</button> &nbsp;
          <button onClick={()=>descending("email")} className="custom-table-btn" >Descending</button></th>
          <th>Company</th>
        </tr>
        {user.map((x) => (
          <>
            <tr>
              <td> <Link to={`/otherUser/userDetails/userID=${x.id}`} style={{color:"black"}}>  {x?.name}</Link> </td>
              
            
              <td>{x?.email}</td>
              <td>{x?.company?.name}</td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
};

export default UserTable;
