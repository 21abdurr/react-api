const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className=" flex justify-center min-h-screen items-center flex-col gap-2 flex-wrap bg-green-400">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please Enter your details
        </p>
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
