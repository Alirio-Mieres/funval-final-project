import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from './auth';
import SVG from "./assets/devchallenges.svg";
import { UsuariosPage } from "./pages/UsuariosPage";
function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
