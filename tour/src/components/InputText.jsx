import React, {useState} from "react";

const InputText = function () {
  const [val, setVal]=useState()
  const data=["Москва", "Минск", "Санкт-Петербург", "Тверь", "Воронеж"]
  return (
  <div>
    <input list="data" className="page__inputSity" onChange={(e)=>setVal(e.target.value)} placeholder="Введите город"/>
    <datalist id="data">
      {data.map((op)=><option>{op}</option>)}
    </datalist>
  </div>)
}

export default InputText;