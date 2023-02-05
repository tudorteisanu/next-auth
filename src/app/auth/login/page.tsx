"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLogin } from "@/hooks/auth/useLogin";

const LoginPage = () => {
  const [name, setName] = useState("test@domain.com");
  const [password, setPassword] = useState("1s2ASD3d4@5678");
  const { login } = useLogin();
  const router = useRouter();
  const onSubmit = async () => {
    try {
      await login(name, password);
      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit flex flex-col gap-2">
        <p className="text-2xl font-bold">Login Form</p>
        <label>Username</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="username"
        />
        <label className="mt-4">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-80 h-8 px-2 border border-solid border-black rounded"
          placeholder="password"
          type="password"
        />
        <button
          onClick={onSubmit}
          className="h-10 w-80 mt-8 bg-black rounded text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
