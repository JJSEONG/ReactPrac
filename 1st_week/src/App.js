// 1주차 내용
import React from "react";
import './App.css';

function App() {
  const styles = {
    border: "1px solid #eee",
    width: "300px",
    padding: "40px",
    margin: "30px auto",
  }

  return (
    <div className="App">
      <div style={styles}>
        <h1 style={{color: "green"}}>안녕하세요!</h1>
        <hr style={{width: "100%"}} />
        <p style={{textAlign: "left"}}>이름을 입력해주세요.</p>
        <input style={{width: "100%"}} type="text" />
      </div>
    </div>
  );
}

export default App;