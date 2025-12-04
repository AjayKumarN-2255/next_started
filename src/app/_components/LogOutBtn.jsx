"use client"
import React from 'react';
import { Logout } from '../actions/Login';

function LogOutBtn() {

  const handleLogout = async () => {
     await Logout()
  }

  return (
    <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
      onClick={handleLogout}>
      Log Out
    </button>
  )
}

export default LogOutBtn
