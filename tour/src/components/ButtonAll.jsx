import React from "react";

const ButtonAll = function () {
  return (  
    <div className="page__buttonAll-row">
      <button type="submit" className="page__buttonAll-yes">Принять все</button>
      <button type="submit" className="page__buttonAll-no">Отказать всем</button>
    </div>
  )
}

export default ButtonAll;