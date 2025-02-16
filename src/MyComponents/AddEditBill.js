import React from "react";
import axios from "axios";

export default function AddEditBill(props) {

  const AddBill = (e) => {
    e.preventDefault();
    let Id = props.getBillId;
    let Name = props.getName;
    let Amount = props.getAmount;
    let BillDate = props.getBillDate;
    let File = props.getFile;

    if (
      Name == "" ||
      Amount == "" ||
      BillDate == "" ||
      File == ""
    ) {
      alert("All fields are required");
      return;
    }

    // let Id;
    // if (props.getbills.length > 0) {
    //   Id =
    //     Math.max(
    //       ...props.getbills.map((a) => {
    //         return a.Id;
    //       })
    //     ) + 1;
    // } else {
    //   Id = 1;
    // }

    let bill = new FormData();
    bill.append("Id", Id);
    bill.append("Name", Name);
    bill.append("Amount", Amount);
    bill.append("BillDate", BillDate);
    bill.append("File", File);

    axios.post("https://localhost:44367/api/Bills/SendBill", bill, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      let bills = response.data;  
      props.setbills(bills);
    })
    .catch(error => console.error("Error fetching users:", error));

    alert("Bill added successfully");

    props.setName("");
    props.setAmount("");
    props.setBillDate("");
    props.setFile(null);
  };

  return (
    <div className="card container mt-4" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="card-header">
        {props.isBillEdit ? <h3>Edit Bill</h3> : <h3>Add Bill</h3>}
      </div>
      <div className="card-body ">
        <form onSubmit={AddBill}>
        <div className="form-group">
            <label htmlFor="billId">Bill Id</label>
            <input
              type="number"
              className="form-control"
              id="billId" value={props.getBillId} disabled
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="Name">Bill Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              placeholder="Enter bill name"
              value={props.getName} onChange={(e) => props.setName(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="Amount">Bill Amount</label>
            <input
              type="number"
              className="form-control"
              id="Amount"
              placeholder="Enter bill amount"
              value={props.getAmount} onChange={(e) => props.setAmount(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="billDueDate">Bill Date</label>
            <input type="date" className="form-control" id="BillDate" 
            value={props.getBillDate} onChange={(e) => props.setBillDate(e.target.value)} />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="billDueDate">Bill Upload</label>
            <input type="file" className="form-control" id="File" 
             onChange={(e) => props.setFile(e.target.files[0])} />
          </div>
          <div className="form-group mt-4 text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
