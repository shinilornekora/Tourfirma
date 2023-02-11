import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import axios from "axios";

async function searchInDB(query) {
  let a = axios.get('http://localhost:8000/api/users/')
  let result;
  a = a.then(
      async (e) => {
        for (let i = 0; i < e.data.length; i++) {
          if ((e.data[i]["email"] === query["email"]) &&
          (e.data[i]["password"] === query["password"])) {
            alert("Успешный вход в систему!");
            result = await e.data[i];
            switch (result["benefit"]) {
              case "ADMIN":
                window.location.href = '/admin';
                break;
              case "MANAGER":
                window.location.href = '/manager';
                break;
              case "TOUROPERATOR":
                window.location.href = '/tourop';
                break;
              case "USER":
                window.location.href = '/client';
                break;
              default:
                alert("Пожалуйста, введите данные ещё раз.");
                break;
            }
            return e.data[i];
          }
        }
    }
  )
  console.log(result);
  return result;
}

function Autorization() {
  let email = ''
  let pass = ''
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <a href="/registration"><Header header={{ name: "Регистрация" }} /></a>
          <main className="page">
            <div className="page__container">
              <div className="page__titleClient">Кажется, кто-то соскучился по хорошему отдыху. Введите почту и пароль ниже</div>
              <div>
                <input className="page__inputSity" onChange={(e)=>email = (e.target.value)} placeholder="Введите почту"/>
              </div>
              <div>
                <input type="password" className="page__inputSity" onChange={(e)=>pass = (e.target.value)} placeholder="Введите пароль"/>
              </div>
              <div className="page__blockGiveApplication">
                <button onClick={() => searchInDB({"email": email, "password": pass})} type="submit">Войти!</button>
              </div>
            </div>
          </main>
          <Footer /> 
        </div>
      </body>
    </div>
  );
}

export default Autorization;


