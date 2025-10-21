import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const { isChecking, isAuthenticated, user, signIn } = useAuthContext();

  if (isChecking) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Verificando usuario...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-y-6">
      {isAuthenticated ? (
        <>
          <h1 className="text-3xl font-bold text-green-600">
            Bienvenido {user?.name}
          </h1>
          <p>Su correo es: {user?.email}</p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-semibold">Login Page</h1>
          <div className="flex flex-col gap-4">
            <input
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="border border-gray-400 p-2 rounded-md"
            />
            <input
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="border border-gray-400 p-2 rounded-md"
            />
            <button
              onClick={() => signIn(inputEmail, inputPassword)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Iniciar sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
};
