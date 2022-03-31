import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushiDisplay, onMoreSushi, onEatSushi, sushiEaten }) {

  return (
    <div className="belt">
      {sushiDisplay.map(s => <Sushi sushi={s} key={s.id} onEatSushi={onEatSushi} sushiEaten={sushiEaten} />)}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
