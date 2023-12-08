import React from 'react'
import { useState } from "react";
const CCE = () => {
    const [showMessage, setShowMessage] = useState(true);
  return (
    <div>
    <h1 className="text-center">
      Department Of Computer and Communication Engineering
    </h1>
    {showMessage && (
      <p className="user-alert-msg border bg-danger">Will be updated soon</p>
    )}
  </div>
  )
}

export default CCE