// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./pages/Home";           // পাবলিক ল্যান্ডিং পেইজ
import Login from "./pages/login";
import Dashboard from "./components/Dashboard"; // প্রোটেক্টেড
import Profile from "./pages/Profile";     // প্রোটেক্টেড
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
// import ComplexCounter from './task/ComplexCounter'
// import CountReduce from "./task/countreduce";
//import FormReducer from "./task/FormReducer";
//import SimpleForm from "./components/SimpleForm";
//import Users from "./components/Users";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div style={{ paddingTop: "80px", minHeight: "100vh", background: "#f8f9fa" }}>
          <Routes>
            {/* পাবলিক রুট */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* প্রোটেক্টেড রুট */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <ComplexCounter /> */}
      </Router>
      {/* <CountReduce/> */}
      {/* <FormReducer/> */}
      {/* <SimpleForm/> */}
      {/* <Users/> */}
    </AuthProvider>

  );
}

export default App;