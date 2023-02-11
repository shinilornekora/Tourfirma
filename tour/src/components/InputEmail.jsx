import React, {useState} from "react";

const InputEmail = function () {
  const [val, setVal]=useState()
  return (
  <div>
    <input className="page__inputSity" onChange={(e)=>setVal(e.target.value)} placeholder="Введите почту"/>
  </div>
  )
}

export default InputEmail;