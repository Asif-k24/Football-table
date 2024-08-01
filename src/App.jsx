import { Route, Routes } from "react-router-dom";
import FootballTable from "./pages/footballTable";
import ClubDetails from "./components/ClubDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FootballTable />} />
      <Route path="/club-details" element={<ClubDetails />} />
    </Routes>
  )
}