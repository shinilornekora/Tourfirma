import React from "react";


function Index() {
  return (
      <div className="content">
        <div className="container">
          <div className="first__screen">
            <header className="main-header">
              <div className="header__logo">
                <img className="firm__logo" src="img/telegramm.png"/>
                  <h2 className="firm__name">TravelStore</h2>
              </div>
              <div className="user">
                <a className="user__registration" href="/Registration">Регистрация</a>
                <h2 className="razdelitel">/</h2>
                <a className="user__enter" href="/Authorization">Войти</a>
                <a href="/Registration"><img className="user__logo" src="img/user.png"/></a>
              </div>
            </header>
            <div className="main__content">
              <div className="main__text">
                <h1 className="first__text">TravelStore</h1>
                <p className="second__text">ваш проводник в мир отдыха</p>
              </div>
              <img className="main__image" src="img/Rectangle%201-PhotoRoom%20(1).png"/>
            </div>
            <div className="main__cards">
              <div className="card">
                <img className="card__back" src="img/cardback.png" alt="карточка отеля"/>
                  <img className="card__image" src="img/image%201.png" alt="отель"/>
                    <div className="card__footer">
                      <h3 className='card__name'>Гостиница "Минск"</h3>
                      <a href="/Registration">
                        <button className="card__button">Бронировать</button>
                      </a>
                    </div>
              </div>

              <div className="card">
                <img className="card__back" src="img/cardback.png" alt="карточка отеля"/>
                  <img className="card__image" src="img/image%202.png" alt="отель"/>
                    <div className="card__footer">
                      <h3 className='card__name'>Гостиница "Москва"</h3>
                      <a href="/Registration">
                        <button className="card__button">Бронировать</button>
                      </a>
                    </div>
              </div>

              <div className="card">
                <img className="card__back" src="img/cardback.png" alt="карточка отеля"/>
                  <img className="card__image" src="img/image%203.png" alt="отель"/>
                    <div className="card__footer">
                      <h3 className='card__name'>Отель "Континенталь"</h3>
                      <a href="/Registration">
                        <button className="card__button">Бронировать</button>
                      </a>
                    </div>
              </div>
            </div>
          </div>
          <div className="second__screen">
            <div className="hotel__card">
              <img className="hotel__img" src="img/hotel1.png" alt="Hotel 1"/>
                <div className="hotel__description">
                  <img className="hotel__image" src="img/фон%20карты.png" alt="#"/>
                    <div className="hotel">
                      <h3 className="hotel__name">Гостиница "Москва"</h3>
                      <p className="hotel__desc__text">Одна из лучших гостиниц столицы, здесь вы можете проснуться как
                        настоящий лидер страны - с видом на Кремль.</p>
                      <div className="hotel__price">
                        <p>100000</p>
                        <img src="img/ruble.png" alt="#"/>
                      </div>
                      <a href="/Registration">
                        <button>Бронировать</button>
                      </a>
                    </div>
                </div>
            </div>

            <div className="hotel__card">
              <img className="hotel__img" src="img/hotel2.png" alt="Hotel 2"/>
                <div className="hotel__description">
                  <img className="hotel__image" src="img/фон%20карты.png" alt="#"/>
                    <div className="hotel">
                      <h3 className="hotel__name">Гостиница "Трансильвания"</h3>
                      <p className="hotel__desc__text">Давно мечтаете оказаться в тихом и спокойном месте?</p>
                      <div className="hotel__price">
                        <p>100000</p>
                        <img src="img/ruble.png" alt="#"/>
                      </div>
                      <a href="/Registration">
                        <button>Бронировать</button>
                      </a>
                    </div>
                </div>
            </div>
          </div>
          <footer className="footer">
            <div className="footer__text">
              <div className="feedback">
                <h2>Обратная связь:</h2>
                <h2>+79357843454</h2>
              </div>
              <p>2022, TravelStore</p>
            </div>
          </footer>
        </div>
      </div>
  );
}

export default Index;
