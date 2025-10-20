import Navbar from "./components/Navbar";
import Helper from "../pages/Helper";
import Letters from "../pages/Letters";
import Links from "../pages/Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Words } from "../pages/Words";
import { LayoutMain } from "../pages/LayoutMain";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route index element={<Helper />} />
            <Route path="/letters" element={<Letters></Letters>} />
            <Route path="/links" element={<Links></Links>} />
            <Route path="/words" element={<Words></Words>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
