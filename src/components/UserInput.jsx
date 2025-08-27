function UserInput({ label, value, onChange }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default UserInput;
