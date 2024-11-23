import React, { useEffect, useState } from "react";

const Mole = () => {
  const initialConfig = Array(4)
    .fill(0)
    .map(() => Array(4).fill(1));

    console.log(initialConfig)

  const [grid, setGrid] = useState(initialConfig);
  const [activeCells, setActiveCells] = useState([]);

  const handleCellClick = ({ rowIndex, cellIndex }) => {
    if (grid[rowIndex][cellIndex] === 2) {
      console.log("You win!");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const min = 0;
      const max = 3;
      const randomRow = Math.floor(Math.random() * (max - min + 1)) + min;
      const randomCol = Math.floor(Math.random() * (max - min + 1)) + min;
      setGrid((prevGrid) => {
        const updatedGrid = prevGrid.map((row) => [...row]);
        if (activeCells.length > 0) {
          const [lastRow, lastCol] = activeCells.pop();
          updatedGrid[lastRow][lastCol] = 1;
        }
        updatedGrid[randomRow][randomCol] = 2;
        return updatedGrid;
      });

      setActiveCells((prevActiveCells) => [
        ...prevActiveCells,
        [randomRow, randomCol],
      ]);
    } , 500);

    return () => clearInterval(intervalId);
  }, [activeCells]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Flex Grid Layout</h1>
      <div style={styles.gridContainer}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.gridRow}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                onClick={() => handleCellClick({ rowIndex, cellIndex })}
                style={{
                  ...styles.gridCell,
                  backgroundColor: cell === 2 ? "red" : "white",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    marginBottom: "20px",
  },
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  gridRow: {
    display: "flex",
    gap: "5px",
  },
  gridCell: {
    width: "50px",
    height: "50px",
    border: "1px solid #ccc",
  },
};

export default Mole;
