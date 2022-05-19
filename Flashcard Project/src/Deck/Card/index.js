import React from "react";
import EditCard from "./EditCard";
import AddCards from "./AddCards";
import { Switch, Route } from "react-router-dom";

function Card() {
  return (
    <div>
      <Switch>
        <Route path="/decks/:deckId/cards/new">
          <AddCards />
        </Route>
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
      </Switch>
    </div>
  );
}

export default Card;
