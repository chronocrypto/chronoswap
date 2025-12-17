export default function Wallet({ setUser }) {
  function connect() {
    const username = prompt("Enter your Hive username");
    if (username) setUser(username);
  }

  return (
    <button onClick={connect}>
      Connect Wallet
    </button>
  );
}
