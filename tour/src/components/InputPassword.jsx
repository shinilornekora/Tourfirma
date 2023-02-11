import React, {useState} from "react";

const InputPassword = function () {
  const [val, setVal]=useState()
  return (
  <div>
    <input className="page__inputSity" onChange={(e)=>setVal(e.target.value)} placeholder="Введите пароль"/>
  </div>)
}

export default InputPassword;