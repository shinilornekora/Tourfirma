import React, {useState} from "react";
let valueName = ''
const InputNameHotel = function () {
  const [valNameHotel, setVal]=useState()
  return (
    <div>
      <input className="page__inputSity" onChange={(e)=>valueName = e.target.value} placeholder="Введите название гостиницы"/>
    </div>
  )
}

export default InputNameHotel;
