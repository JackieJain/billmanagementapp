import React from "react";

export default function AddEditBill(props) {

  const AddBill = (e) => {
    e.preventDefault();
    let billName = props.getBillname;
    let billAmount = props.getBillAmount;
    let billDate = props.getBillDate;
    let billupload = props.getBillUpload;

    if (
      billName == "" ||
      billAmount == "" ||
      billDate == "" ||
      billupload == ""
    ) {
      alert("All fields are required");
      return;
    }

    let Id;
    if (props.getbills.length > 0) {
      Id =
        Math.max(
          ...props.getbills.map((a) => {
            return a.Id;
          })
        ) + 1;
    } else {
      Id = 1;
    }

    let bill = { Id, billName, billAmount, billDate, billupload };
    props.setbills([...props.getbills, bill]);
    alert("Bill added successfully");

    props.setBillName("");
    props.setBillAmount("");
    props.setBillDate("");
    props.setBillUpload("");
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
            <label htmlFor="billName">Bill Name</label>
            <input
              type="text"
              className="form-control"
              id="billName"
              placeholder="Enter bill name"
              value={props.getBillname} onChange={(e) => props.setBillName(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="billAmount">Bill Amount</label>
            <input
              type="number"
              className="form-control"
              id="billAmount"
              placeholder="Enter bill amount"
              value={props.getBillAmount} onChange={(e) => props.setBillAmount(e.target.value)}
            />
          </div>

          <div className="form-group mt-4">
            <label htmlFor="billDueDate">Bill Date</label>
            <input type="date" className="form-control" id="billDate" 
            value={props.getBillDate} onChange={(e) => props.setBillDate(e.target.value)} />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="billDueDate">Bill Upload</label>
            <input type="file" className="form-control" id="billupload" 
            onChange={(e) => props.setBillUpload(e.target.value)} />
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
