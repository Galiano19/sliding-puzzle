export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="relative flex items-center justify-center px-6 pt-12 pb-6">
      {children}
    </header>
  );
}
