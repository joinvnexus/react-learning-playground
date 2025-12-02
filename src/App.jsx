// src/App.js
import { AuthProvider } from './context/AuthContext';
import AuthForm from './task/AuthForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <div style={{ fontFamily: "Kalpurush", minHeight: "100vh", background: "#f0f2f5" }}>
        <AuthForm />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;