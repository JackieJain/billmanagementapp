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
  const [getName, setName] = useState("");
  const [getAmount, setAmount] = useState("");
  const [getBillDate, setBillDate] = useState("");
  const [getFile, setFile] = useState(null);
  const [isBillEdit, setBillEdit] = useState(false);
  
  return (
    <>
    <Router>
    <NavBar />
      <Routes>
    <Route exact path="/" element={<AddEditBill setbills={setBills} getbills={getBills}
                    getBillId={getBillId} setBillId={setBillId} 
                    getName={getName} setName={setName}
                      getAmount={getAmount} setAmount={setAmount}
                      getBillDate={getBillDate} setBillDate={setBillDate}
                      getFile={getFile} setFile={setFile} title={isBillEdit} />}/>

    <Route path="/BillMaster" element={<BillMaster setbills={setBills} getbills={getBills}
                      getBillId={getBillId} setBillId={setBillId} 
                      getName={getName} setName={setName}
                        getAmount={getAmount} setAmount={setAmount}
                        getBillDate={getBillDate} setBillDate={setBillDate}
                        getFile={getFile} setFile={setFile} setBillEdit={setBillEdit} /> }/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
