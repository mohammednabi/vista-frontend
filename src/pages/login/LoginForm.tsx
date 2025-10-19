import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Hook point: replace with real auth logic
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const payload = {
      email: formData.get("email") as string | null,
      password: formData.get("password") as string | null,
      remember,
    };
    console.log("login attempt", payload);
  }

  return (
    <Card className="w-full max-w-md bg-white/[0.05] text-gray-100 border-0 backdrop-blur-xl shadow-2xl rounded-2xl relative overflow-hidden">
      <CardHeader className="px-8 pt-8">
        <div className="text-center ">
          <h1 className="text-6xl font-bold text-white/80 leading-tight dynapuff mb-2">
            VISTA
          </h1>
        </div>
      </CardHeader>

      <CardContent className="px-8 pb-0 relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="group">
            <Label
              htmlFor="email"
              className="flex flex-col gap-2 items-start text-sm font-medium text-gray-300  transition-colors"
            >
              Email
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="username@email.com"
                required
                className=" outline-none border-none focus:outline-none  bg-white/5   transition-all duration-300"
              />
            </Label>
          </div>

          <div className="group">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-300  transition-colors"
              >
                Password
              </Label>
              <a
                href="#"
                className="text-sm text-primary-purple hover:text-secondary-purple transition-colors"
              >
                Forgot?
              </a>
            </div>

            <div className="relative mt-2">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                className="bg-white/5 border-white/10 focus:border-purple-500/50 focus:ring-purple-500/30 transition-all duration-300"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-primary-purple to-secondary-purple  text-white border-0 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]"
            variant="default"
          >
            Sign in
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-4 px-8 pb-8">
        <div className="w-full flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-xs text-gray-400">or</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <Button
          variant="outline"
          className="w-full flex cursor-pointer items-center justify-center gap-3 text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 hover:text-white transition-all duration-300"
        >
          <FaGoogle className="text-primary-purple" />
          Continue with Google
        </Button>

        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-400">Don't Have Account ?</span>
          <Link
            to={"/signup"}
            className="text-sm text-primary-purple hover:underline"
          >
            Signup
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
