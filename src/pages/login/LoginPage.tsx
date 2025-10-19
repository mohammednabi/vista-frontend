import React from "react";
import LoginForm from "./LoginForm";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,var(--secondary-purple),transparent)]"></div>
      </div>

      <div className="container relative mx-auto p-6 flex items-center justify-center">
        <div className="w-full max-w-md mt-20">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
