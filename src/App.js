
import CardList from "./Components/CardList";
import FormComponent from "./Components/FormComponent";
import { useState } from "react";
import './App.css';

function App() {

  const [cards,setCards] = useState([])
  
  const onAddNewCard = (newCard) => {
    setCards((prevCard) => {
      return [newCard,...prevCard]
    })
  }
  


  
  return (
    <div className="container">
      <FormComponent onAddNewCard = {onAddNewCard}/>
      <CardList cards = {cards}/>
      
    </div>
  );
}

export default App;