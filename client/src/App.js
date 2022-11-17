
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./adminScreens/AdminDashboard";


function App() {
  return (
    <Router>
      <Routes>
        {/*  adimin Routes */}
        <Route path="/" element={<AdminDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
