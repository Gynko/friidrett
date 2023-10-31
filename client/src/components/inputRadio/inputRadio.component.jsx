import "./inputRadio.styles.css";

export default function InputRadio({
  list,
  name,
  label,
  selectedValue,
  onValueChange,
}) {
  const handleRadioClick = (value) => {
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div className="input-container-radio">
      <label className="radio-title">{label}</label>
      <div className="radio-inputs-container">
        {list.map((item, index) => (
          <div key={index} className="radio-item">
            <input
              type="radio"
              name={name}
              value={item.value}
              checked={item.value === selectedValue}
              onChange={(e) => handleRadioClick(e.target.value)}
              className="hidden-radio"
            />
            <div
              className={`radio-container ${
                item.value === selectedValue ? "selected" : ""
              }`}
              onClick={() => handleRadioClick(item.value)}
            >
              {item.labelText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
