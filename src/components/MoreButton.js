import React from "react";

function MoreButton({ onMoreSushi }) {

  function handleMoreClick() {
    onMoreSushi()
  }

  return <button onClick={handleMoreClick}>More sushi!</button>;
}

export default MoreButton;
