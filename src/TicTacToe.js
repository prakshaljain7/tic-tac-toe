import react, { useEffect, useState } from "react";

function TicTacToe() {
  const [currentBoard, setCurrentBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [currentBoard]);

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      let row = currentBoard[i];
      if (row[0] == row[1] && row[1] == row[2] && row[0] != "") {
        setIsGameEnd(true);
        setWinner(row[0]);
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        currentBoard[0][i] == currentBoard[1][i] &&
        currentBoard[1][i] == currentBoard[2][i] &&
        currentBoard[0][i] != ""
      ) {
        setIsGameEnd(true);
        setWinner(currentBoard[0][i]);
      }
    }
    if (
      currentBoard[0][0] == currentBoard[1][1] &&
      currentBoard[1][1] == currentBoard[2][2] &&
      currentBoard[0][0] != ""
    ) {
      setIsGameEnd(true);
      setWinner(currentBoard[0][0]);
    }
    if (
      currentBoard[0][2] == currentBoard[1][1] &&
      currentBoard[1][1] == currentBoard[2][0] &&
      currentBoard[0][2] != ""
    ) {
      setIsGameEnd(true);
      setWinner(currentBoard[0][2]);
    }
    let flag = false;
    for (let i = 0; i < 3; i++) {
      for (j = 0; j < 3; j++) {
        if (currentBoard[i][j] == "") {
          flag = true;
        }
      }
    }
    if (!flag) {
      setIsDraw(true);
    }
  };

  const handleClick = (row, column) => {
    if (isGameEnd) return;
    let _currentBoard = JSON.parse(JSON.stringify(currentBoard));
    let _currentRow = currentBoard[row];
    if (_currentRow[column] == "") {
      _currentRow[column] = currentPlayer;
      _currentBoard[row] = _currentRow;
      setCurrentBoard(_currentBoard);
      if (currentPlayer == "X") {
        setCurrentPlayer("O");
      } else {
        setCurrentPlayer("X");
      }
    }
  };

  const resetGrid = () => {
    setCurrentBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentPlayer("X");
    setIsGameEnd(false);
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div>
      {currentBoard.map((value, row) => {
        return (
          <div style={{ display: "flex" }} key={`row_${row}`}>
            {value.map((currentValue, column) => {
              return (
                <div
                  style={{
                    height: 40,
                    width: 40,
                    border: "1px solid black",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                  key={`column_${row}_${column}`}
                  onClick={() => handleClick(row, column)}
                >
                  {currentValue}
                </div>
              );
            })}
          </div>
        );
      })}
      <button
        style={{ marginTop: 20 }}
        onClick={() => {
          resetGrid();
        }}
      >
        Reset
      </button>

      {isGameEnd && (
        <div>
          <p>{`${winner} is winner`}</p>
        </div>
      )}
      {isDraw && !isGameEnd && (
        <div>
          <p>{`Game is draw`}</p>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
