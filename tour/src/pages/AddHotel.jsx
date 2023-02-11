import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

function addHotel(a, b) {
  console.log(a)
  console.log(b)
  const hotel = {
    "hotelName": a,
    "quantityFree": b,
  }
  console.log(hotel)
  return axios.post('http://127.0.0.1:8000/api/admin/', hotel).then((result) => {
    console.log(result.data);
  })
      .catch((error) => {
        console.log(error);
      })
}

function AddHotel(user) {
  let name = ''
  let quantity = ''
  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <Header header={{ name: "Лупкин Карл", post: "Администратор" }} />
          <main className="page">
            <div className="page__container">
              <div className="page__titleClient">Введите данные для добавления новой гостиницы:</div>
              <div>
                <input className="page__inputSity" onChange={(e)=>name = e.target.value} placeholder="Введите название гостиницы"/>
              </div>
              <div>
                <input className="page__inputSity" onChange={(e)=> quantity = e.target.value} placeholder="Введите количество номеров"/>
              </div>
              <div className="page__blockGiveApplication">
                <button type="submit" onClick={() =>
                  addHotel(name, quantity)}><a href={'http://localhost:3000/admin'}>Добавить гостиницу</a></button>
              </div>
            </div>
          </main>
          <Footer /> 
        </div>
      </body>
    </div>
  );
}

export default AddHotel;


