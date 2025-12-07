import "./text-input.style.css";

export function TextInput({ defaultValue, ...rest }) {
  return <input defaultValue={defaultValue} className="text-input" {...rest} />;
}
