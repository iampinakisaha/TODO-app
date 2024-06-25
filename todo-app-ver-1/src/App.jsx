import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/todos" element={<TodoPage/>} />
    </Routes>
  )
}

export default App;
