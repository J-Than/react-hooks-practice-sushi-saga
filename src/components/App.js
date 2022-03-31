import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([]);
  const [sushiEaten, setSushiEaten] = useState([]);
  const [sushiIndex, setSushiIndex] = useState(0);
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setSushiList(data))
  }, [])

  function handleMoreSushi() {
    setSushiIndex(sushiIndex => sushiIndex = sushiIndex<96 ? sushiIndex + 4 : 0)
  }

  function handleEatSushi(sushiID) {
    setSushiEaten([...sushiEaten, sushiID])
  }

  function handlePayment(price) {
    setMoney(money => money = money - price)
  }

  return (
    <div className="app">
      <SushiContainer
        sushiDisplay={sushiList.slice(sushiIndex, sushiIndex+4)}
        onMoreSushi={handleMoreSushi}
        onEatSushi={handleEatSushi}
        sushiEaten={sushiEaten}
        onPayment={handlePayment}
        money={money}
        />
      <Table plates={sushiEaten} money={money} />
    </div>
  );
}

export default App;
