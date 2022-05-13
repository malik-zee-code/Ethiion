import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import Application from "./pages/Applications/Application";
import Candidate from "./pages/Candidate/Candidate";
import DashBoard from "./pages/Dashboard/DashBoard";
import Reports from "./pages/Reports/Reports";
import ThemeProvider from "./theme"

const App = () => {
  return (
    <ThemeProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
        <Route path="/reports/*" element={<Reports />} />
        <Route path="/applications/*" element={<Application />} />
        <Route path="/candidate/*" element={<Candidate />} />
      </Routes>
    </div>
    </ThemeProvider>
  );
};

export default App;
