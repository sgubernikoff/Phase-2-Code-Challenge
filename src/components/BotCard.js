import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ item, onButtonClick, deleteBot }) {
  function handleClick() {
    onButtonClick(item);
  }

  function handleDelete(e) {
    e.stopPropagation();
    fetch(`http://localhost:8002/bots/${item.id}`, {
      method: "DELETE",
    });
    deleteBot(item);
  }

  return (
    <div className="ui column">
      <div className="ui card" key={item.id} onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={item.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {item.name}
            <i className={botTypeClasses[item.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{item.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {item.health}
          </span>

          <span>
            <i className="icon lightning" />
            {item.damage}
          </span>
          <span>
            <i className="icon shield" />
            {item.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui mini red button" onClick={handleDelete}>
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
