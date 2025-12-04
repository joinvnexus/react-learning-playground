// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskIndex from "./task/TaskIndex";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Home from "./pages/Home"; // পাবলিক ল্যান্ডিং পেইজ
import Login from "./pages/login";
import Dashboard from "./components/Dashboard"; // প্রোটেক্টেড
import Profile from "./pages/Profile"; // প্রোটেক্টেড
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import ComplexCounter from "./task/ComplexCounter";
import CountState from "./task/count-state";
import CountReducer from "./task/countreduce";
import FormReducer from "./task/FormReducer";
import AuthForm from "./task/AuthForm";
import Friend from "./task/friend";
import FriendCard from "./task/FriendCard";
import FruitTable from "./task/FruitTable";
import JokesApp from "./task/JokesApp";
import ProductCard from "./task/products";
import ProfileCard from "./task/ProfileCard";
import Task1 from "./task/task-1";
import Todo from "./task/Todo";
import TodoApp from "./task/TodoApp";
import UserList from "./task/UserList";
import Footer from "./task/Footer";
import SimpleForm from "./components/SimpleForm";
import Users from "./components/Users";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div
          style={{
            paddingTop: "80px",
            minHeight: "100vh",
            background: "#fcfdffff",
          }}
        >
          <Routes>
            {/* পাবলিক রুট */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <TaskIndex />
                </ProtectedRoute>
              }
            />
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

            <Route path="/tasks" element={<TaskIndex />} />
            <Route path="/tasks/complex-counter" element={<ComplexCounter />} />
            <Route path="/tasks/count-state" element={<CountState />} />
            <Route path="/tasks/countreduce" element={<CountReducer />} />
            <Route path="/tasks/form-reducer" element={<FormReducer />} />
            <Route path="/tasks/auth-form" element={<AuthForm />} />
            <Route path="/tasks/friend" element={<Friend />} />
            <Route path="/tasks/friend-card" element={<FriendCard />} />
            <Route path="/tasks/fruit-table" element={<FruitTable />} />
            <Route path="/tasks/jokes" element={<JokesApp />} />
            <Route path="/tasks/product-card" element={<ProductCard />} />
            <Route path="/tasks/profile-card" element={<ProfileCard />} />
            <Route path="/tasks/task-1" element={<Task1 />} />
            <Route path="/tasks/todo" element={<Todo />} />
            <Route path="/tasks/todo-app" element={<TodoApp />} />
            <Route path="/tasks/user-list" element={<UserList />} />
            <Route path="/tasks/footer" element={<Footer />} />
            <Route path="/simple-form" element={<SimpleForm />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
