import './App.css';
import AddEditBill from './MyComponents/AddEditBill';
import BillMaster from './MyComponents/BillMaster';
import React, { use, useState,useEffect } from 'react';
import NavBar from './MyComponents/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [getBills, setBills] = useState([]);

  const [getBillId, setBillId] = useState(0);
  const [getBillname, setBillName] = useState("");
  const [getBillAmount, setBillAmount] = useState("");
  const [getBillDate, setBillDate] = useState("");
  const [getBillUpload, setBillUpload] = useState("");
  const [isBillEdit, setBillEdit] = useState(false);
  
  return (
    <>
    <Router>
    <NavBar />
      <Routes>
    <Route exact path="/" element={<AddEditBill setbills={setBills} getbills={getBills}
                    getBillId={getBillId} setBillId={setBillId} 
                    getBillname={getBillname} setBillName={setBillName}
                      getBillAmount={getBillAmount} setBillAmount={setBillAmount}
                      getBillDate={getBillDate} setBillDate={setBillDate}
                      getBillUpload={getBillUpload} setBillUpload={setBillUpload} title={isBillEdit} />}/>

    <Route path="/BillMaster" element={<BillMaster setbills={setBills} getbills={getBills}
                      getBillId={getBillId} setBillId={setBillId} 
                      getBillname={getBillname} setBillName={setBillName}
                        getBillAmount={getBillAmount} setBillAmount={setBillAmount}
                        getBillDate={getBillDate} setBillDate={setBillDate}
                        getBillUpload={getBillUpload} setBillUpload={setBillUpload} /> }/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
