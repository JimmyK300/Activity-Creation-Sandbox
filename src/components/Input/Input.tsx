type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      className="input"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}