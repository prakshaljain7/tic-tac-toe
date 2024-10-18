import "./styles.css";
import TicTacToe from "./TicTacToe";

export default function App() {
  return (
    <div className="App">
      <p>Tic Tac Toe</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TicTacToe />
      </div>
    </div>
  );
}
