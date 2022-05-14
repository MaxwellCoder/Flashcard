import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readCard, updateCard, readDeck } from "../../utils/api/index";
import CardForm from "./CardForm";

function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({});

  useEffect(() => {
    async function loadData() {
      try {
        const dataFromAPI = await readDeck(deckId);
        setDeck(dataFromAPI);
        const datafromApi2 = await readCard(cardId);
        setCard(datafromApi2);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    }
    loadData();
  }, [deckId, cardId]);

  function frontChange(e) {
    setCard({ ...card, front: e.target.value });
  }

  function backChange(e) {
    setCard({ ...card, back: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateCard(card).then((output) => history.push(`/decks/${output.deckId}`));
  }

  return (
    <section className="container">
<CardForm handleSubmit={handleSubmit} frontChange={frontChange} backChange={backChange} card={card}/>
    </section>
  );
}

export default EditCard;
