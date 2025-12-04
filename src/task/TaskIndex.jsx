import { Link } from "react-router-dom";
import "./TaskIndex.css";

export default function TaskIndex() {
  return (
    <div className="task-container">
      <h2 className="task-title">Task Examples</h2>
      <p className="task-subtitle">Click a link to open the task component:</p>

      <div className="task-grid">
        <Link to="/tasks/profile-card" className="task-link">ProfileCard</Link>
        <Link to="/friend" className="task-link">FriendCard</Link>
        <Link to="/tasks/fruit-table" className="task-link">FruitTable</Link>
        <Link to="/tasks/jokes" className="task-link">JokesApp</Link>
        <Link to="/tasks/product-card" className="task-link">ProductCard</Link>
        <Link to="/tasks/task-1" className="task-link">Task1</Link>
        <Link to="/tasks/todo" className="task-link">TodoApp</Link>
        <Link to="/tasks/todo-app" className="task-link">Todo</Link>
        <Link to="/tasks/user-list" className="task-link">UserList</Link>
        <Link to="/tasks/footer" className="task-link">Footer</Link>
        <Link to="/tasks/complex-counter" className="task-link">ComplexCounter</Link>
        <Link to="/tasks/count-state" className="task-link">CountState</Link>
        <Link to="/tasks/countreduce" className="task-link">CountReducer</Link>
        <Link to="/tasks/form-reducer" className="task-link">FormReducer</Link>
        <Link to="/tasks/auth-form" className="task-link">AuthForm</Link>
        <Link to="/tasks/friend" className="task-link">Friend</Link>
        <Link to="/header" className="task-link">Header</Link>
        <Link to="/simple-form" className="task-link">SimpleForm</Link>
        <Link to="/users" className="task-link">Users</Link>
      </div>
    </div>
  );
}
