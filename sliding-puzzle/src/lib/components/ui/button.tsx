import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 h-14 rounded-xl font-bold transition-all active:scale-95 p-4 hover:cursor-pointer hover:scale-105 active:scale-95";

  const variantStyles = {
    primary: "bg-primary hover:bg-primary-hover shadow-lg",
    secondary: "border border-border hover:shadow-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
