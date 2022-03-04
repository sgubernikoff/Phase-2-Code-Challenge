import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, deleteBot, removeBot }) {
  const display = army.map((item) => (
    <BotCard
      key={item.id}
      item={item}
      deleteBot={deleteBot}
      onButtonClick={removeBot}
    />
  ));

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">{display}</div>
      </div>
    </div>
  );
}

export default YourBotArmy;
