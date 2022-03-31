import React from "react";

function Sushi({ sushi, onEatSushi, sushiEaten, onPayment, money }) {

  const doneBeenEt = sushiEaten.includes(sushi.id)

  function handleEatClick() {
    if (money >= sushi.price) {
      onEatSushi(sushi.id);
      onPayment(sushi.price);
    } else { return null }
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
