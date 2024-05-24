import React from 'react'
import "../App.css";
import "./Button";
// import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import Button from "./Button";
// import SuccessPage from "./components/SuccessPage";
// import FailurePage from "./components/FailurePage";

function Home() {
  return (
    <div>
      <div className="centered">
        <Header />
        <ButtonContainer>
          <Button className="button1" to="/success" outcome="Success" />
          <div className="button-gap"></div>
          <Button className="button2" to="/failure" outcome="Failure" />
        </ButtonContainer>
      </div>
    </div>
  )
}

export default Home