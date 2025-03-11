type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-3 py-1 bg-gray-900 text-white text-sm rounded-sm cursor-pointer flex items-center justify-center gap-2"
    >
      {children}
    </button>
  );
}
