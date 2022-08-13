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
import CandidateInspection from "./Components/Graphs/CandidateInspection";
import Sources from "./Components/Graphs/Sources";
import TeamTracker from "./Components/Graphs/TeamTracker";
import Pipeline from "./Components/Graphs/Pipeline";
import Flow from "./Components/Graphs/Flow";
import Velocity from "./Components/Graphs/Velocity";
import Survival from "./Components/Graphs/Survival";
import TimetoHire from "./Components/Graphs/TimetoHire";
import HeadCount from "./Components/Graphs/HeadCount";
import EntryandTermination from "./Components/Graphs/EntryandTermination";
import Turnover from "./Components/Graphs/Turnover";

const App = () => {
  return (
    <ThemeProvider>
      <ToastContainer />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
          <Route path="/reports/*" element={<Reports />}>
            <Route
              path="candidateInspection"
              element={<CandidateInspection />}
            />
            <Route path="candidateSource" element={<Sources />} />
            <Route path="candidateTeamTracker" element={<TeamTracker />} />
            <Route path="candidatePipeline" element={<Pipeline />} />
            <Route path="candidateflow" element={<Flow />} />
            <Route path="candidateVelocity" element={<Velocity />} />
            <Route path="candidateSurvival" element={<Survival />} />
            <Route path="candidateHiring" element={<TimetoHire />} />
            <Route path="employeeHeadcount" element={<HeadCount />} />
            <Route path="employeeEntry" element={<EntryandTermination />} />
            <Route path="employeeTurnover" element={<Turnover />} />
          </Route>
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
