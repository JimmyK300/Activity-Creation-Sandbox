type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}