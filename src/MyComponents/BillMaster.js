import React from "react";

export default function BillMaster(props) {
  const deleteBill = (Id) => {
    props.setbills(props.getbills.filter((x) => x.Id != Id));
  };

  return (
    <div className="card container" style={{ marginTop: "50px" }}>
      <div className="card-header">
        <h3>Bill Master</h3>
      </div>
      <div className="card-body">
        <table className="table table-bordered mt-4" border="1">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Bill Name</th>
              <th scope="col">Bill Amount</th>
              <th scope="col">Bill Date</th>
              <th scope="col">Bill Upload</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          {props.getbills.map((bill, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td id="rowId">{bill.Id}</td>
                  <td>{bill.billName}</td>
                  <td>{bill.billAmount}</td>
                  <td>{bill.billDate}</td>
                  <td>
                    <img src={bill.billupload}></img>{" "}
                  </td>
                  <td>
                    <button className="btn btn-primary ml-2">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteBill(bill.Id);
                      }}
                    >
                      Delete
                    </button>
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
