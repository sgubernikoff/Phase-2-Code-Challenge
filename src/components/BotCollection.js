import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, deleteBot }) {
  const display = bots.map((item) => (
    <BotCard
      key={item.id}
      item={item}
      onButtonClick={addBot}
      deleteBot={deleteBot}
    />
  ));
  return (
    <div className="ui four column grid">
      <div className="row">{display}</div>
    </div>
  );
}

export default BotCollection;
