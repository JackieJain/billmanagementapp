import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function BillMaster(props) {

  useEffect(() => {

    axios.get("https://localhost:44367/api/Bills/GetBills")
      .then(response => 
      {
        let bills = response.data;  
        //props.setbills(bills);
        props.setbills(Array.isArray(bills) ? bills : []);
      }
      )
      .catch(error => console.error("Error fetching users:", error));
  },[]); // Empty array = Runs only once when the component appears
   const navigate = useNavigate();


  const deleteBill = (Id) => {

    let existingbills = props.getbills; 
    axios.post("https://localhost:44367/api/Bills/DeleteBill", Id)
    .then(response => 
    {
      props.setbills(props.getbills.filter((x) => x.id != Id));
      alert("Bill deleted successfully");
    })
    .catch(error => {
      props.setbills(existingbills);
      alert("Something went wrong"); 
      console.error("Error fetching users:", error)
    });

  };

  const EditBill = (Id) => {

    let bill = props.getbills.filter((x) => x.id == Id)[0];
    props.setBillId(bill.id);
    props.setName(bill.name);
    props.setAmount(bill.amount);
    props.setBillDate(bill.billDate);
    props.setFile(bill.file);

    navigate("/");  
  }

  return (
    <div className="card container" style={{ marginTop: "50px" }}>
      <div className="card-header">
        <h3>Bill Master</h3>
      </div>
      <div className="card-body" style={{ height: "669px", overflowY: "auto" }}>
        <table className="table table-bordered mt-4" border="1" >
          <thead style={{ position:"sticky", top:"0" }}>
            <tr>
              <th scope="col" width="5%">Sr No.</th>
              <th scope="col" width="20%">Bill Name</th>
              <th scope="col">Bill Amount</th>
              <th scope="col">Bill Date</th>
              <th scope="col">Bill Upload</th>
              <th scope="col" width="10%">Action</th>
            </tr>
          </thead>

          {props.getbills.map((bill, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td id="rowId">{bill.id}</td>
                  <td>{bill.name}</td>
                  <td>{bill.amount}</td>
                  <td>{bill.billDate}</td>
                  <td>
                    <img src={"data:image/png;base64,"+bill.fileBytes} style={{height:"50px", width:"50px" }} />
                  </td>
                  <td>
                    <div className="row col-12">
                    <div className="col-6">
                    <button className="btn btn-primary" onClick={()=> {EditBill(bill.Id)}} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg></button>
                    </div>
                    <div className="col-6">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteBill(bill.id);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg>
                    </button>
                    </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
