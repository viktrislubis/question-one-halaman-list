import { Routes, Route } from "react-router-dom";
import Ideas from "./pages/Ideas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Ideas />} />
    </Routes>
  );
}

export default App;
