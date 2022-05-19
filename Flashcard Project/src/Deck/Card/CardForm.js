import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api/index";

function CardForm({handleSubmit, frontChange, backChange, card}){
    

return(
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
)
}
export default CardForm;