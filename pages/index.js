import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Characters from "../components/Characters/Characters";

const Index = () => {
  // Fix: Use parentheses for useState
  const [characters, setCharacters] = useState(null);

  const getCharacterData = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );
      setCharacters(response.data);
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, []);

  return (
    <>
      <Header />
      <Characters characters={characters} />
      <Footer />
    </>
  );
};

export default Index;
