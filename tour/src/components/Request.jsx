import React from "react";

const Request = function (props) {
  return (  
    <div className="page__request">
      <div className="page__requestName">
          {/* {props.request.nameSity}, гостиница {props.request.nameHotel},
          {props.request.nameNumber} номер. {props.request.nameUser}*/}
      </div>
      <div className="page__button-row">
        <button type="submit" className="page__button-yes"></button>
        <button type="submit" className="page__button-no"></button>
      </div>
    </div>
  )
}

export default Request;