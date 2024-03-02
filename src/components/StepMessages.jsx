const StepMessages = ({ step, children }) => {
  return (
    <div>
      <p className="message">
        <h3>step {step} </h3> 
        {children}
      </p>
    </div>
  );
};

export default StepMessages;
