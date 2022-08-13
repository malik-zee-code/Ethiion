import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import Application from "./pages/Applications/Application";
import Candidate from "./pages/Candidate/Candidate";
import DashBoard from "./pages/Dashboard/DashBoard";
import Jobs from "./pages/Jobs/Jobs";
import Reports from "./pages/Reports/Reports";
import ThemeProvider from "./theme";
import { ToastContainer } from "react-toastify";
import Csr from "./pages/CSR/Csr";
import CandidateInspection from "./Components/Jobs Panel/CandidateInspection";
import Sources from "./Components/Jobs Panel/Sources";
import TeamTracker from "./Components/Jobs Panel/TeamTracker";

const App = () => {
  return (
    <ThemeProvider>
      <ToastContainer />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/reports/*" element={<Reports />} />
          <Route path="/applications/*" element={<Application />} />
          <Route path="/candidate/*" element={<Candidate />} />
          <Route path="/jobs/*" element={<Jobs />}>
            <Route
              path="candidate/inspection"
              element={<CandidateInspection />}
            />
            <Route path="candidate/sources" element={<Sources />} />
            <Route path="candidate/team-tracker" element={<TeamTracker />} />
          </Route>
          <Route path="/csr/*" element={<Csr />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
