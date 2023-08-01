const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-slate-600">
      {children}
    </div>
  );
}

export default AuthLayout;