import React, { useState } from "react";
import InnList from "../components/ApplicationTour";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";

function TourManager() {

  return (
        <div className="App">
      <body>
        <div className="wrapper">
          <Header header={{ name: "Планировщик Костя", post: "Туроператор" }} />
          <main className="page">
            <div className="page__container">
              <div className="page__title-row">
                <Title title={{ id: 1, name: "Доступные гостиницы" }} />
              </div>
              <div className="page__applications-column">
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

export default TourManager;


