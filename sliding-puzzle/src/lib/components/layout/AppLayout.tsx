import Header from "./Header";

export default function AppLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  return (
    <div className="relative flex h-screen w-full max-w-[480px] mx-auto flex-col overflow-hidden shadow-2xl">
      <Header>
        <h1 className="text-2xl font-bold">{pageTitle}</h1>
      </Header>
      <main className="flex flex-col items-center justify-center px-6 h-full">
        {children}
      </main>
    </div>
  );
}
