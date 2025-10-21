import { LoginPage } from "./components/LoginPage";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <LoginPage/>
    </AuthProvider>
  );
}

export default App;

