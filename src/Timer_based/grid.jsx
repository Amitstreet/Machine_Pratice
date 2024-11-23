import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {useState} from 'react'

const grid = () => {
  const config = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
   let limit=7;
   const [store,setstore]= useState([]);
   const [con,setcon]= useState(config);
   const [start,setstart]= useState(false);

   const handle=(cell)=>{
    con[cell.rowIndex][cell.cellIndex]=2;
    if(store.length==limit-1)
    {
        setstart(true);
    }
    setcon([...con]);
    store.push(cell);
    setstore([...store]);
  }


  useEffect(()=>{
    if(start)
    {
    let interval= setInterval(()=>{
    if(store.length==0)
    {
        clearInterval(interval);
        return;
    }
    let loc= store.pop();
    con[loc.rowIndex][loc.cellIndex]=1;
    setcon([...con]);
    setstore([...store])
   },1000) 
}

  },[start])



  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Flex Grid Layout</h1>
      <div style={styles.gridContainer}>
        {con.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.gridRow}>
            {row.map((cell, cellIndex) => (
            cell &&  <div
                key={cellIndex}
                onClick={()=>{
                    handle({cell,cellIndex,rowIndex})
                }}

                style={{
                  ...styles.gridCell,
                  backgroundColor: cell==2 ?"red":"white",
                  pointerEvents: cell==2? "none":"default",
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



export default grid;


