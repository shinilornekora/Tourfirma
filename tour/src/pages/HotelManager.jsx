import React, { useState } from "react";
import ButtonAll from "../components/ButtonAll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import InnList from "../components/ApplicationManager";


function HotelManager() {

  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <Header header={{ name: "Володя Кость", post: "Менеджер" }} />
          <main className="page">
            <div className="page__container">
              <div className="page__title-row">
                <Title title={{ id: 1, name: "Запросы на бронирование" }} />
                <ButtonAll/>
              </div>
              <div className="page__requests-column">
                <InnList />
              </div>
            </div>
          </main>
          <Footer /> 
        </div>
      </body>
    </div>
  );
}

export default HotelManager;


