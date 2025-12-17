export function executeSwap({ user, symbol, qty, price }) {
  const payload = {
    contractName: "market",
    contractAction: "sell",
    contractPayload: {
      symbol,
      quantity: qty.toString(),
      price: price.toFixed(8),
      expiration: 3600
    }
  };

  return new Promise((resolve, reject) => {
    if (!window.hive_keychain) {
      reject("Hive Keychain not installed");
      return;
    }

    window.hive_keychain.requestCustomJson(
      user,
      "ssc-mainnet-hive",
      "Active",
      JSON.stringify(payload),
      "ChronoSwap",
      res => (res.success ? resolve(res) : reject(res))
    );
  });
}
