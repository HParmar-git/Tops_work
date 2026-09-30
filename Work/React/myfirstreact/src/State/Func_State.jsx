import React, { useState } from 'react'

function Func_State() {
  const [name, setName] = useState("Hardik");
  
  const [data, setdata] = useState({
     number: 1,
     name: "Hardik"
  }); 

  const handleFamilyChange = () => {
    if (name === 'Hardik' || name === 'Hardik Parmar' || name === 'Hetansh Parmar' ) {
      setName('Hansh Parmar');
    } else {
      setName('Parmar Family');
    }
  };
  
  const [count , setcount] = useState(0);
  
  const increment = () => {
     setcount((precount) => precount + 1);
  };

  const decrement = () => {
     setcount((precount) => (precount > 0 ? precount - 1 : 0));
  };

  // Modern CSS Styles Object
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "500px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      backgroundColor: "#ffffff",
      textAlign: "center",
      color: "#333"
    },
    heading: {
      fontSize: "24px",
      color: "#2c3e50",
      marginBottom: "20px"
    },
    buttonGroup: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px"
    },
    btn: {
      padding: "10px 16px",
      fontSize: "14px",
      fontWeight: "600",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      backgroundColor: "#3498db",
      color: "white",
      transition: "background-color 0.2s"
    },
    btnDanger: {
      backgroundColor: "#e74c3c"
    },
    btnDisabled: {
      backgroundColor: "#bdc3c7",
      cursor: "not-allowed"
    },
    divider: {
      margin: "30px 0",
      border: "0",
      borderTop: "1px solid #db1b1b"
    },
    countText: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#9bf40bf6",
      margin: "15px 0"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Current Name: <span style={{color: '#3498db'}}>{name}</span></h1>
      
      <div style={styles.buttonGroup}>
        <button style={styles.btn} onClick={() => setName("Hardik Parmar")}>Hardik Parmar</button>
        <button style={{...styles.btn, backgroundColor : 'lightpink'}} onClick={() => setName("Hetansh Parmar")}>Hetansh Parmar</button>
        <button style={{...styles.btn, backgroundColor: '#2ecc71'}} onClick={handleFamilyChange}>Toggle Family</button>
      </div>

      <hr style={styles.divider} />

      <h1 style={styles.heading}>Counter App</h1>
      <div style={styles.countText}>{count}</div>

      <div style={styles.buttonGroup}>
        <button style={{...styles.btn, backgroundColor: '#27ae60' , ...(count === 5 ? styles.btnDisabled : {})}} onClick={increment} disabled ={count===5}
        >Increase</button>
        <button 
          style={{
            ...styles.btn, 
            ...styles.btnDanger, 
            ...(count === 0 ? styles.btnDisabled : {})
          }} 
          onClick={decrement} 
          disabled={count === 0}
        >
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Func_State;
