type Props = {
  children: React.ReactNode;
};
const layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default layout;
