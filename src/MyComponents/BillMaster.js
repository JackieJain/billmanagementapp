import React from 'react'

export default function BillMaster(props) {

    const deleteBill = (index) => {
        
    }

  return (
    <div className="container" style={{marginTop: '50px'}}>
      <table className="table" border="1">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Bill Name</th>
                <th scope="col">Bill Amount</th>
                <th scope="col">Bill Date</th>
                <th scope="col">Bill Upload</th>
                <th scope="col">Action</th>
            </tr>
            </thead>

            { props.bills.map((bill, index) => {    
                return (
                    <tbody key={index}>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{bill.billName}</td>
                            <td>{bill.billAmount}</td>
                            <td>{bill.billDate}</td>
                            <td>{bill.billupload}</td>
                            <td>
                                <button className="btn btn-primary" >Edit</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                )  }) 
            }
        </table>
    </div>
  )
}
