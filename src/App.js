import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./components/mainpage/MainPage";
import Popup from "./components/Popup/Popup";

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  return (
    <div>
      <Navbar onDownloadClick={handleOpenPopup} /> 
      <MainPage  onDownloadClick={handleOpenPopup} />

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        title="Download Brochure"
      />
    </div>
  );
}

export default App;
