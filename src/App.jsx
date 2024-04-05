import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  return (
    <div className="w-full min-h-screen py-8 bg-gray-900 flex justify-center">
      <main className=" w-1/2">
        <Header/>
        <UserInput userInput={userInput} onChange={handleChange}/>
        {!inputIsValid && <p className="text-center mt-2 text-white">Please enter a duration grather than 0.</p>}
        {inputIsValid && <Results input={userInput} />}
      </main>
    </div>
  )
}

export default App
