import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AUthProvider";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/signup" element={<Login />} /> */}
          {/* <Route path="/login" element={<Signup />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
