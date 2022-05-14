import React from "react";
import DeckList from "../Deck/DeckList.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link to="/decks/new" className="btn btn-lg btn-secondary">
          Create Deck
        </Link>
      </div>
      <br></br>
      <div>
        <DeckList />
      </div>
    </div>
  );
}

export default Home;
