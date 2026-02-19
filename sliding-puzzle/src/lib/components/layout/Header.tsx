export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex items-center justify-between px-6 pt-12 pb-6">
      {children}
    </header>
  );
}
