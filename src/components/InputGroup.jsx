import UserInput from "./UserInput";

function InputGroup({ input, onChangeValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          value={input.initialInvestment}
          onChange={(value) => {
            onChangeValue("initialInvestment", value);
          }}
        />
        <UserInput
          label="Annual Investment"
          value={input.annualInvestment}
          onChange={(value) => {
            onChangeValue("annualInvesment", value);
          }}
        />
        <UserInput
          label="Expected Return"
          value={input.expectedReturn}
          onChange={(value) => {
            onChangeValue("expectedReturn", value);
          }}
        />
        <UserInput
          label="Duration"
          value={input.duration}
          onChange={(value) => {
            onChangeValue("duration", value);
          }}
        />
      </div>
    </section>
  );
}

export default InputGroup;
