import { useState, useEffect } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("---");
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
    setPrice(parseFloat(event.target.value));
    setName(event.target.selectedOptions[0].text.split(':')[0]);
  };
  return (
    <div>
      <h1>The Coins! {loading? "":`(How many? ${coins.length})`}</h1>
      {loading? <strong>Loading...</strong>:
      <select onChange={onSelect}>
          <option value={0.0}>===Select Coin===</option>
        {coins.map((coin) => (
          <option 
            key={coin.id} 
            value={coin.quotes.USD.price}
          >
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(5)} USD 
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
      <p>You can buy {name} {amount !== 0 && amount !== null? (amount/price).toFixed(5) : 0}</p>
    </div>
  )
}

export default Coin;
