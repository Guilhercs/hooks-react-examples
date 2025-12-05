import "./text-input.style.css";

export function TextInput({ ...rest }) {
  return <input className="text-input" {...rest} />;
}
