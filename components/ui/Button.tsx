type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} style={{ padding: "8px 16px" }}>
      {children}
    </button>
  );
}
