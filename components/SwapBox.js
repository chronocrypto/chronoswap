import { useEffect, useState } from "react";
import { getTokens, buyBook } from "../lib/hiveEngine";
import { bestFill } from "../lib/router";
import { executeSwap } from "../lib/swap";

export default function SwapBox({ user }) {
  const [tokens, setTokens] = useState([]);
  const [symbol, setSymbol] = useState("SWAP.HIVE");
  const [amount, setAmount] = useState("");
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getTokens().then(setTokens);
  }, []);

  async function quoteSwap() {
    const book = await buyBook(symbol);
    setQuote(bestFill(book, amount));
  }

  async function swap() {
    await executeSwap({
      user,
      symbol,
      qty: amount,
      price: quote.avgPrice
    });
    alert("Swap submitted");
  }

  return (
    <div>
      <select value={symbol} onChange={e => setSymbol(e.target.value)}>
        {tokens.map(t => (
          <option key={t.symbol} value={t.symbol}>
            {t.symbol}
          </option>
        ))}
      </select>

      <input
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={quoteSwap}>Get Quote</button>

      {quote && <p>Average price: {quote.avgPrice}</p>}

      <button disabled={!quote} onClick={swap}>
        Swap
      </button>
    </div>
  );
}
