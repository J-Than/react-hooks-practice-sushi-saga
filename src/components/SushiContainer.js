import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushiDisplay, onMoreSushi, onEatSushi, sushiEaten, onPayment }) {

  return (
    <div className="belt">
      {sushiDisplay.map(s => <Sushi
        sushi={s}
        key={s.id}
        onEatSushi={onEatSushi}
        sushiEaten={sushiEaten}
        onPayment={onPayment}  
      />)}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
