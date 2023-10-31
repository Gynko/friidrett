import "./button.styles.css";

export default function Button({ text, color, onClick, width, type = "button" }) {

    return (
        <button className= {`button-${color} button-${width}`} onClick={onClick} type={type}>
            {`${text}`}
        </button>
    );
}