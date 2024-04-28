import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import homeConstants from "../../Constants/home.constants";
import HomePage from "../../views/HomePage";
import Topbar from "../Layout/topbar/Topbar";
import MediaSection from "../../shared/components/MediaSection";
import Wert from "../../views/Wert";
import Schaden from "../../views/Schaden";
import AUTHENTIFIZIERUNG from "../../views/AUTHENTIFIZIERUNG";
import News from "../../views/News";
import CardDetails from "../../views/CardDetails";
import Reviews from "../../views/Reviews";
import CardDetails2 from "../../views/CardDetails2";
import Impression from "../../views/Impression";
import Datenschutz from "../../views/Datenschutz";

function App() {

  return (
    // <Router>
    // </Router>
    <HashRouter>
      <div>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> */}

        {/* Define Routes */}
        <Routes>
          <Route
            path="/SCHADEN"
            element={<Schaden currentPage={homeConstants.SCHADEN_PAGE} />}
          />
          <Route path="/Datenschutz" element={<Datenschutz />} />
          <Route path="/Impression" element={<Impression />} />
          <Route path="/News" element={<News />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/CardDetails" element={<CardDetails />} />
          <Route path="/CardDetails2" element={<CardDetails2 />} />
          <Route path="/WERT" element={<Wert />} />
          <Route path="/AUTHENTIFIZIERUNG" element={<AUTHENTIFIZIERUNG />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
