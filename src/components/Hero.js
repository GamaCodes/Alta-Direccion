import React from "react";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";

export default function Hero() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src="consul_logotipo.svg" className="App-logo" alt="logo" />
          <p className="App-link">Consultores En</p>
          <p className="App-red">Alta Dirección</p>
          <a href="#acerca">
            <AssignmentReturnedIcon
              style={{ fontSize: 50, color: "#EF2E32" }}
            />
          </a>
        </header>
      </div>
    </div>
  );
}
