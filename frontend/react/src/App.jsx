import Navbar from "./components/Navbar";
import Helper from "../pages/Helper/Helper";
import Letters from "../pages/Letters/Letters";
import Links from "../pages/Links/Links";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Helper></Helper>} />
          <Route path="/letters" element={<Letters></Letters>} />
          <Route path="/links" element={<Links></Links>} />
        </Routes>
    </Router>
    </>
  );
}
 
export default App
