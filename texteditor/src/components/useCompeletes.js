import React from "react";

const useCompeletes = ( initial = "" ) => {
  // ref값 가져온 걸,
  // state를 변경!

  const [text, setText2] = React.useState(initial);

  const changeText = ( _ref ) => {

    const value = _ref.current? _ref.current.value : "";

    if (value && value !== "") {
      console.log(_ref)
      setText2(value);
      _ref.current.value = "";
    }
  }

  return [text, changeText];

}

export default useCompeletes