import "./inputDatePicker.styles.css"

export default function InputDatePicker({ value, onChange, name }) {
  return (
    <div className="date-input-container">
     
        <input 
          type="date"
          placeholder=""
          name={name}
          value={value}
          onChange={onChange}
          className="input-date-picker"
        />
     
    </div>
  );
}

