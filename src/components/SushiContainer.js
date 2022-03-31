import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushiDisplay, onMoreSushi }) {

  return (
    <div className="belt">
      {sushiDisplay.map(s => <Sushi sushi={s} key={s.id} />)}
      <MoreButton onMoreSushi={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
