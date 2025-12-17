import { useState } from "react";
import Wallet from "../components/Wallet";
import SwapBox from "../components/SwapBox";

export default function Home() {
  const [user, setUser] = useState(null);

  return (
    <main>
      <h1>ChronoSwap</h1>
      {!user ? <Wallet setUser={setUser} /> : <SwapBox user={user} />}
      <footer>
        Non custodial Hive Engine swap interface
      </footer>
    </main>
  );
}
