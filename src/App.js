import './App.css';
import AddEditBill from './MyComponents/AddEditBill';
import BillMaster from './MyComponents/BillMaster';
import React, { use, useState,useEffect } from 'react';

function App() {

  const [getBills, setBills] = useState([]);
  
  return (
    <>
    <AddEditBill setbills={setBills} getbills={getBills} />
    <BillMaster bills={getBills} /> 
    </>
  );
}

export default App;
