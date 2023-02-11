import React, { Component } from "react";
import Application from "../components/Application";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import InnsList from "../components/Application";

class Admin extends Component {
  render() {
    return (
      <div className="App">
	  <body>
         <div className="wrapper">
           <Header header={{ name: "Лупкин Фёдор", post: "Администратор" }} />
           <main className="page">
             <div className="page__container">
               <div className="page__title-row">
                 <Title title={{ id: 1, name: "Список гостиниц" }} />
                 <button type="submit" className="page__deleteAll">удалить все</button>
              </div>
               <div className="page__applications-column">
       		 <InnsList />
      		 <a href="" className="page__addHotel">
                   <a href="/addHotel"><div className="page__yellowPlus"></div></a>
                 </a>
               </div>
             </div>
           </main>
           <Footer/>
         </div>
       </body>
     </div>
    );
  }
}

export default Admin;
