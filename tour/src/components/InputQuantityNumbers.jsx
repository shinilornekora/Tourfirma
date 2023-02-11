import React, {useState} from "react";

const InputQuantityNumbers = function () {
  const [valQuantityNumbers, setVal]=useState()
    let valueNum = ''
  return (
    <div>
      <input className="page__inputSity" onChange={(e)=> valueNum = e.target.value} placeholder="Введите количество номеров"/>
    </div>
  )
}

export default InputQuantityNumbers;