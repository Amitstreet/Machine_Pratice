import React, { useEffect, useState } from "react";

const Memory = () => {
  const initialConfig = [
    [2, 3, 1,3],
    [1, 4, 2,6],
    [4, 8, 6,5],
    [5, 8, 9 ,9],
  ];

  const boollean = [
    ["F", "F", "F","F"],
    ["F", "F", "F","F"],
    ["F", "F", "F","F"],
    ["F", "F", "F" ,"F"],
  ];

  
  const config = 

  console.log(initialConfig)
  const [grid, setGrid] = useState(initialConfig);
  const [activeCells, setActiveCells] = useState([]);
  const [bool,setbool]= useState(boollean)
  const handleCellClick = ({ rowIndex, cellIndex }) => {
         if(activeCells.length<2)
         {
            setActiveCells([...activeCells,{rowIndex,cellIndex}]);
            setbool([...bool,bool[rowIndex][cellIndex]="T"]);
            if(activeCells.length==1)
            {
                let id= setTimeout(()=>{
                    setActiveCells((nactiveCells)=>{
                        let fl= nactiveCells.pop();
                        let sl= nactiveCells.pop();
                        let val1= grid[fl.rowIndex][fl.cellIndex];
                        let val2= grid[sl.rowIndex][sl.cellIndex];
                        if(val1!=val2)
                        {
                        setbool((nbool)=>{
                            return [...nbool,nbool[fl.rowIndex][fl.cellIndex]="F",nbool[sl.rowIndex][sl.cellIndex]="F"];
                    })
                }
                return [];
                })
            },1000)
         }
         }
        }
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const min = 0;
//       const max = 3;
//       const randomRow = Math.floor(Math.random() * (max - min + 1)) + min;
//       const randomCol = Math.floor(Math.random() * (max - min + 1)) + min;

//       setGrid((prevGrid) => {
//         const updatedGrid = prevGrid.map((row) => [...row]);
//         if (activeCells.length > 0) {
//           const [lastRow, lastCol] = activeCells.pop();
//           updatedGrid[lastRow][lastCol] = 1;
//         }
//         updatedGrid[randomRow][randomCol] = 2;
//         return updatedGrid;
//       });

//       setActiveCells((prevActiveCells) => [
//         ...prevActiveCells,
//         [randomRow, randomCol],
//       ]);
//     } , 500);

//     return () => clearInterval(intervalId);
//   }, [activeCells]);

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
                  color:"black",
                  backgroundColor: cell === 55 ? "red" : "white",
                }}
              > {bool[rowIndex][cellIndex]=="F"?"$":cell}</div>
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

export default Memory;
