import React from "react";
import Sections from "../Sections/Sections";
import QuoteForm from "../QuoteForm/QuoteForm";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-layout">
      <div className="left-section">
        <Sections />
      </div>
      <div className="right-section">
        <QuoteForm />
      </div>
    </div>
  );
};

export default MainPage;
