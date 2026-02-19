export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl bg-background10 border border-border p-4 ${className}`}
    >
      {children}
    </div>
  );
}
