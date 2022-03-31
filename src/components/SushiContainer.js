import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushiDisplay, onMoreSushi, onEatSushi, sushiEaten, onPayment, money }) {

  return (
    <div className="belt">
      {sushiDisplay.map(s => <Sushi
        sushi={s}
        key={s.id}
        onEatSushi={onEatSushi}
        sushiEaten={sushiEaten}
        onPayment={onPayment}
        money={money}
      />)}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
