'use client'
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Videos(){
  toast.success("Wow so easy!")

  return (
    <div>
      <button className="pl-20" >Notify!</button>
      <ToastContainer />
    </div>
  );
}