import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { WarningIcon } from "../components/icons";

export default function Authentication() {
  const [error, setError] = useState(null);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showError(msg: string, timeInSeconds = 5) {
    setError(msg);
    setTimeout(() => setError(null), timeInSeconds);
  }

  function submit() {
    if (mode === "login") {
      console.log("login");
    } else {
      console.log("register");
    }
  }

  return (
    <div className={`flex  h-screen items-center justify-center`}>
      <div className={`hidden md:block w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem"
          className={`h-screen w-full object-cover`}
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`text-2xl font-bold mb-5 `}>
          {mode === "login"
            ? "Use your account to access"
            : "Register yourself on the platform"}
        </h1>

        {error && (
          <div
            className={`flex items-center bg-red-400 text-white py-3 px-5 my-2 rounded-lg`}
          >
            {WarningIcon}
            <span className="ml-2">An error happenned!</span>
          </div>
        )}

        <AuthInput
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          required
        />

        <button
          onClick={submit}
          className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-2 mt-6`}
        >
          {mode === "login" ? "Login" : "Register"}
        </button>

        <hr className={`my-6 border-gray-300 w-full`} />

        <button
          onClick={submit}
          className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-2`}
        >
          Login with Google
        </button>

        {mode === "login" ? (
          <a
            onClick={() => setMode("register")}
            className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer mt-5 inline-block`}
          >
            Create Account
          </a>
        ) : (
          <a
            onClick={() => setMode("login")}
            className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer mt-5 inline-block`}
          >
            Enter with existing account
          </a>
        )}
      </div>
    </div>
  );
}
