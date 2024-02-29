import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNextClick = () => {
    if (step < 3) setStep(step + 1);
  };
  const handlePerviousClick = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <div>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step} : messages{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFF" }}
              onClick={handlePerviousClick}
            >
              pervious
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#FFF" }}
              onClick={handleNextClick}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
