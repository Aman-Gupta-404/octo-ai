function AuthLauyout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-full w-screen bg-indigo-500">
      {children}
    </div>
  );
}

export default AuthLauyout;
