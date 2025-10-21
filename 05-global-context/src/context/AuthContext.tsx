import { createContext, useContext, useState, type PropsWithChildren } from "react";

export type AuthStatus  = "checking" | "authenticated" | "unauthenticated"


interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isAuthenticated: boolean;
  isChecking: boolean;
  signIn: (email: string, password: string) => void;
}


const USER_LIST: User[] = [
  { id: 1, name: "Maria", email: "maria@example.com", password: "1234" },
  { id: 2, name: "Juan", email: "juan@example.com", password: "abcd" },
];

// Creación del contexto
export const AuthContext = createContext({} as AuthState);

// Hook para acceder fácilmente al contexto
export const useAuthContext = () => useContext(AuthContext);

// Proveedor del contexto
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthStatus>("unauthenticated");
  const [user, setUser] = useState<User>();

  function signIn(email: string, password: string) {
    const usersFound = USER_LIST.filter(
      (value) => value.email === email && value.password === password
    );

    setStatus("checking");

    if (usersFound.length > 0) {
      setTimeout(() => {
        setUser(usersFound[0]);
        setStatus("authenticated");
      }, 2000);
    } else {
      setTimeout(() => {
        setUser(undefined);
        setStatus("unauthenticated");
      }, 2000);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        status,
        isChecking: status === "checking",
        isAuthenticated: status === "authenticated",
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
