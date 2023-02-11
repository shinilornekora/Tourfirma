import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

function handleCreate(query){
  let self = this
  axios.post('http://127.0.0.1:8000/api/tourop/', query).then(()=>{});
  alert("Заявка успешно принята! Туроператор свяжется с вами в ближайшее время");
}


function Client() {
  let text = ''
  const data=["Москва", "Минск", "Санкт-Петербург", "Тверь", "Воронеж"]
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <Header header={{ name: "Лупкин Младший" }} />
          <main className="page">
            <div className="page__container">
              <div className="page__titleClient">Выберите город, и укажите свой номер телефона через пробел.</div>
              <div>
                <input list="data" className="page__inputSity" onChange={(e)=>text = (e.target.value)} placeholder="Введите город"/>
                <datalist id="data">
                  {data.map((op)=><option>{op}</option>)}
                </datalist>
              </div>
              <div className="page__blockGiveApplication">
                <button type="submit" onClick={() => handleCreate({"city": text.split(" ")[0],
                  "client": text.split(" ")[1]})}>Подать заявку!</button>
              </div>
            </div>
          </main>
          <Footer /> 
        </div>
      </body>
    </div>
  );
}

export default Client;