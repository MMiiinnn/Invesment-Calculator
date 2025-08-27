import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import TableResult from "./components/TableResult";

function App() {
  const [userInput, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration > 0;
  // const finalResult = calculateResult(inputs);

  function handleChange(field, value) {
    setUserInputs((prev) => ({
      ...prev,
      [field]: Number(value),
      // [field]: +value, // Second change
    }));
  }

  return (
    <div>
      <Header />
      <InputGroup input={userInput} onChangeValue={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
      {inputIsValid && <TableResult input={userInput} />}
    </div>
  );
}

export default App;
