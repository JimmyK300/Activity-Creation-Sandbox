type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

import "./Button.css";
export function Button({ children, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
