import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api/index";
import CardForm from "./CardForm";

function AddCards() {
  const [deck, setDeck] = useState({ name: "", description: "" });
  const { deckId } = useParams();
  const initializeForm = {
    front: "",
    back: "",
    deckId,
  };
  const [card, setCard] = useState({ ...initializeForm });

  useEffect(() => {
   async function loadData() {
   const dataFromAPI = await readDeck(deckId);
   setDeck(dataFromAPI);
    }
    loadData();
  }, [deckId]);

  function handleSubmit(e) {
    e.preventDefault();
    async function updateData() {
      await createCard(deckId, card);
      setCard({ ...initializeForm });
    }
    updateData();
  }

  function frontChange(e) {
    setCard({ ...card, front: e.target.value });
  }

  function backChange(e) {
    setCard({ ...card, back: e.target.value });
  }

  return (
    <section className="container">
   <CardForm handleSubmit={handleSubmit} frontChange={frontChange} backChange={backChange} card={card}/>
    </section>
  );
}

export default AddCards;
