import React from 'react'

export default function AddEditBill(props) {

    let bills = [];
    const AddBill = (e) => {
        e.preventDefault();

        let billName = document.getElementById('billName').value;
        let billAmount = document.getElementById('billAmount').value;
        let billDate = document.getElementById('billDate').value;
        let billupload = document.getElementById('billupload').value;

        if(billName == '' || billAmount == '' || billDate == '' || billupload == ''){
            alert('All fields are required');
            return;
        }   
        // bills = localStorage.getItem('bills');
        // if(bills == null){
        //     bills = [];
        // }else{
        //     bills = JSON.parse(bills);
        // }
        let bill = {
            billName,
            billAmount,
            billDate,
            billupload
        }
        props.setbills([...props.getbills, bill]);
        localStorage.setItem('bills', JSON.stringify(bills));
        document.getElementById('billName').value = '';
        document.getElementById('billAmount').value = '';
        document.getElementById('billDate').value = '';   
        document.getElementById('billupload').value = '';
    }
  return (
    <div className="container" >
        <h3>Add/Edit Bill</h3>
        <form onSubmit={AddBill}>
            <div className="form-group">
            <label htmlFor="billName">Bill Name : </label>
            <input type="text" className="form-control" id="billName" placeholder="Enter bill name" />
            </div>
            <div className="form-group">
            <label htmlFor="billAmount">Bill Amount : </label>
            <input type="number" className="form-control" id="billAmount" placeholder="Enter bill amount" />
            </div>
            <div className="form-group">
            <label htmlFor="billDueDate">Bill Date : </label>
            <input type="date" className="form-control" id="billDate" />
            </div>
            <div className="form-group">
            <label htmlFor="billDueDate">Bill Upload : </label>
            <input type="file" className="form-control" id="billupload" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
