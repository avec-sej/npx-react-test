import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then(json => {
        setCoins(json); 
        setLoading(false);
      });
  },[]);
  const getAmount = (event) => {
    setAmount(event.target.value);
  };
  const onSelect = (event) => {
    setIndex(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <h1>The Coins! {loading? "":`(How many? ${coins.length})`}</h1>
      {loading? <strong>Loading...</strong>:
      <select value={index} onSelect={onSelect}>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD 
          </option>
        ))}
      </select>
      }
      <hr/>
      <label>I have $ </label>
      <input 
        type="number" 
        value={amount} 
        onChange={getAmount}
      />
      <p>You can buy {index}</p>
    </div>
  )
}

export default App;
