import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import axios from 'axios'



function handleCreate(query) {
    let self = this
    axios.post('http://127.0.0.1:8000/api/users/', query).then(()=>{});
    alert("Вы успешно зарегестрировались!");
    window.location.href = '/client';
}


function Registration() {
  let email = "";
  let password = "";
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <a href="/authorization"><Header header={{ name: "Авторизация" }} /></a>
          <main className="page">
            <div className="page__container">
              <div className="page__titleClient">До отдыха осталось совсем немного, осталось заполнить недостающую информацию</div>
              <div>
                <input className="page__inputSity" onChange={(e)=>email = (e.target.value)} placeholder="Введите почту"/>
              </div>
              <div>
                <input className="page__inputSity" type="password" onChange={(e)=>password = (e.target.value)} placeholder="Введите пароль"/>
              </div>
              <div className="page__blockGiveApplication">
                <button type="submit" onClick={(e)=>{
                  handleCreate({
                    "login": "example3",
                    "password": password,
                    "username": "user",
                    "email": email,
                    "date": "2004-03-15T11:11:00Z",
                    "beneficiary": "20% sale",
                    "benefit": "USER",
                    "benefitDate": "2015-11-11T22:22:00Z"})}}
                  >Зарегистрироваться!
                </button>
              </div>
            </div>
          </main>
          <Footer /> 
        </div>
      </body>
    </div>
  );
}

export default Registration;