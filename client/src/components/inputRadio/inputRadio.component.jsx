import "./inputRadio.styles.css";

export default function InputRadio({ list, name, onChange, label }) {
  return (
    <div>
      <label>{label}</label>
      <div className="radio">
        {list.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              name={name}
              value={item.value}
              checked={item.checked}
              onChange={onChange}
            />
            {item.label}
          </label>
        ))}
      </div>
    </div>
  );
}
