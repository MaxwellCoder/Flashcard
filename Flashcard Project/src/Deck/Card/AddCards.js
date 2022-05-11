import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api/index";

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
      <h2><span>{deck.name}</span> : <span>Add Card</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="deckName">Front</label>
          <textarea
            className="form-control"
            id="cardName"
            placeholder="Front side of card"
            onChange={frontChange}
            value={card.front}
            rows="3"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Back</label>
          <textarea
            className="form-control"
            id="cardDescription"
            placeholder="Back side of card"
            rows="3"
            onChange={backChange}
            value={card.back}
          />
        </div>
        <Link to="/" className="btn btn-secondary">
          Done
        </Link>
        <button type="submit" className="btn btn-primary" to="/">
          Save
        </button>
      </form>
    </section>
  );
}

export default AddCards;
