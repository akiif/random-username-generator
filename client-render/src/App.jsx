import React, { useState } from "react";
import users from './data/users.json';

// import components
import TitleSection from "./components/TitleSection";
import DataSection from "./components/DataSection";
import GenerateForm from "./components/GenerateForm";
import Footer from "./components/Footer";

function App() {
  const [randomUsername, setRandomUsername] = useState(() => {
    return users[generateRandomNumber()].username
  });

  const generateNewRandomData = () => {
    const randomNumber = generateRandomNumber();
    setRandomUsername(users[randomNumber].username);
  }

  return (
    <>
      <TitleSection />
      <DataSection randomUsername={randomUsername} />
      <GenerateForm generate={generateNewRandomData} />
      <Footer />
    </>
  );
}

export default App;

const generateRandomNumber = () => {
  return Math.floor((Math.random() * 3264) + 1);
}