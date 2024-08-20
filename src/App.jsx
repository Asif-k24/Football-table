import { Route, Routes } from "react-router-dom";
import FootballTable from "./pages/FootballTable";
// import ClubDetails from "./components/ClubDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<FootballTable />} />
    </Routes>
  )
}