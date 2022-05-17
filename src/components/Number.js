import { useState } from "react";

function Number() {
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    let inputValue = event.target.value;
    if (inputValue === "") {
      setNumber("");
      return;
    }
    let newInputVal = onlyNum(inputValue);

    if(!/^[0-9]+$/.test(newInputVal)) return;
    let n = newInputVal.length;

    if (n > 10) return;
    if (n < 4) setNumber(onlyNum(inputValue));
    else if (n > 3 && n < 7) AddParenthesis(newInputVal, n);
    else if (n > 6) AddHyphen(newInputVal, n);
    else setNumber(inputValue);
  };

  const onlyNum = (value) => {

    let newInputVal = value.replace(/[() -]/g,"");
    return newInputVal;
  };

  const AddParenthesis = (value, n) => {
    setNumber(`(${value.slice(0, 3)})${value.slice(3, n)}`);
  };

  const AddHyphen = (value, n) => {
    setNumber(`(${value.slice(0, 3)})${value.slice(3, 6)}-${value.slice(6, n)}`);
  };

  return (
    <div className="App">
      <input type="text" value={number} onChange={handleChange} />
    </div>
  );
};

export default Number;