import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index";

function CreateDeck() {
  const [deck, setDeck] = useState({ name: "", description: "" });
  const history = useHistory();
  
  async function submitHandler(event) {
    event.preventDefault();
    await createDeck(deck);
    history.push("/decks");
  }

  function changeName(e) {
    setDeck({ ...deck, name: e.target.value });
  }

  function changeDesc(e) {
    setDeck({ ...deck, description: e.target.value });
  }

  return (
    <section className="container">
      <h2>Create Deck</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="deckName">Name</label>
          <input
            type="text"
            className="form-control"
            id="deckName"
            placeholder="Deck Name"
            onChange={changeName}
            value={deck.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            placeholder="Brief description of the deck"
            rows="5"
            onChange={changeDesc}
            value={deck.description}
          />
        </div>
        <Link to="/"><button type="button" className="btn">Cancel</button></Link>
        <button type="submit" className="btn btn-primary" to="/">
          Submit
        </button>
      </form>
    </section>
  );
}

export default CreateDeck;
