import "./App.css";
import BookingPageSection from "./BookingPageSection";
import FAQSection from "./FAQSection";
import FeatureList from "./FeatureList";
import GuideProfileSection from "./GuideProfileSection";
import Header from "./Header";
import ItinerarySection from "./ItinerarySection";
import MyMap from "./leaflet";
import NorwayGuideCard from "./NorwayCard";
import ThingsToDoCarousel from "./ThingsToDoCarousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NorwayGuideCard />
                <FeatureList />
                <MyMap />
                <ThingsToDoCarousel />
                <ItinerarySection />
                <BookingPageSection />
                <GuideProfileSection />
                <FAQSection />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
