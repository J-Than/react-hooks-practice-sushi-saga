import React from "react";

function Sushi({ sushi, onEatSushi, sushiEaten }) {

  const doneBeenEt = sushiEaten.includes(sushi.id)

  function handleEatClick() {
    onEatSushi(sushi.id)
  }

  return (
    <div className="sushi">
      <div className={"plate"} onClick={doneBeenEt ? null : handleEatClick}>
        {doneBeenEt ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
