import './App.css';
import React from "react";
import Textarea from './components/Textarea';
import Input from './components/Input';
import Compelete from './components/Compelete';
import useCompeletes from './components/useCompeletes';

function App() {

  const text_ref = React.useRef(null);
  // const [text, setText] = React.useState("원하는 값을 입력하세요.")
  const [text, setText] = useCompeletes("원하는 값을 입력하세요!")

  return (
    <div className="App">
      <Textarea text={text} />
      <Input text_ref={text_ref} />
      <Compelete text_ref={text_ref} setText={setText} />
    </div>
  );
}

export default App;
