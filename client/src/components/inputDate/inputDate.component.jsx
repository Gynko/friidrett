import "./inputDate.styles.css";

const currentYear = new Date().getFullYear();
const years = Array.from(new Array(120), (val, index) => currentYear - index);

export default function InputDate({ value, onChange }) {
  return (
    <div>
      <h3 className="h3-input">Birth year</h3>
      <select
        name="year"
        id="year-select"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}
