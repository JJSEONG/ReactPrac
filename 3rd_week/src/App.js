// 3주차 내용
import './App.css';
import React from "react";

/**
 * 
 * 1. 뷰 만들기
 *    ㄴ 제목 / 내용 / 공부시간을 기입할 인풋
 * 2. 입력한 내용 추가
 *    ㄴ state 사용
 * 3. state에 추가한 내용이 list 뷰에 출력
 * 
 */

function App() {
  const [til_list, setTilList] = React.useState([]);
  const title_ref = React.useRef(null);
  const content_ref = React.useRef(null);
  const time_ref = React.useRef(null);

  const addTIL = () => {
    const til_data = {
      title: title_ref.current.value,
      content: content_ref.current.value,
      time: time_ref.current.value
    }
    setTilList([...til_list, til_data]);
  }

  console.log(til_list)

  return (
    <div className="App">
      <div style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-around",
          margin: "2rem",
          textAlign: "left"
      }}>
        <div style={{
          width: "60vmin"
        }}>
          <div className="title-area" style={{
            borderBottom: "1px solid #ccc"
          }}>
            <h1>TIL</h1>
          </div>
          <div className="til-list">
            {til_list.map((til, idx) => {
              return (
                <div className="til-item" key = {idx} style={{
                  border: "1px solid #ccc",
                  padding: ".5rem",
                  margin: "1rem"
                }}>
                  <h3>{til.title}</h3>
                  <p>{til.content}</p>
                  <p>{til.time}</p>
                </div>
              )
            })}
          </div>
        </div>
        

        <div className="input-area" style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <div>
            <span>과목</span>
            <input type="text" ref={title_ref} />
          </div>

          <div>
            <span>내용</span>
            <input type="text" ref={content_ref} />
          </div>

          <div>
            <span>공부시간</span>
            <input type="text" ref={time_ref} />
          </div>

          <button style={{
            border: "none",
            padding: "1rem",
            backgroundColor: "pink"
          }} onClick = {addTIL}>추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
