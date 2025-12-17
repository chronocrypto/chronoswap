import axios from "axios";

const API = "https://api.hive-engine.com/rpc/contracts";

async function call(contract, table, query = {}, limit = 100) {
  const res = await axios.post(API, {
    jsonrpc: "2.0",
    method: "find",
    params: { contract, table, query, limit },
    id: 1
  });
  return res.data.result || [];
}

export const getTokens = () => call("tokens", "tokens");
export const buyBook = symbol => call("market", "buyBook", { symbol });
