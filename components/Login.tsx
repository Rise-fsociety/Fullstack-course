"use client";

import { useState } from "react";
import { toast } from "react-toastify";

type LoginProps = {
  setToken: (token: string) => void;
};

const Login = ({ setToken }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // fake login (frontend only)
    const fakeToken = "logged-in-token";

    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);

    toast.success("Logged in successfully ✅");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-neutral w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
