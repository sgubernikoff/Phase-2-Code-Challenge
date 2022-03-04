import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  function addBot(newBot) {
    const botty = army.find((item) => newBot.id === item.id);
    if (!botty) return setArmy([...army, newBot]);
  }

  function removeBot(deleteBot) {
    const botty = army.filter((item) => item.id !== deleteBot.id);
    setArmy(botty);
  }

  function deleteBot(deleteBot) {
    const botty = bots.filter((item) => item.id !== deleteBot.id);
    setBots(botty);
    removeBot(deleteBot);
  }

  return (
    <div>
      <YourBotArmy army={army} removeBot={removeBot} deleteBot={deleteBot} />
      <BotCollection bots={bots} addBot={addBot} deleteBot={deleteBot} />
    </div>
  );
}

export default BotsPage;
