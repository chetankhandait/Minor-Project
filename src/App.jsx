import Navbar from "./components/Navbar";
import Donation from "./pages/Donation";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobspage from "./pages/Jobspage";
import QnASection from "./pages/QnASection";
import EventManagement from "./pages/EventManagement";
import FundraiserDetails from "./pages/FundraiserDetails";
import SignInPage from "./pages/AuthPAge";
import DonationPage from "./pages/DonationPage";
import ConfirmationPage from "./pages/Conformation";
import ThankYouPage from "./pages/ThankyouPage";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import CommunityChat from "./pages/CommunityChat";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex-1 overflow-auto pt-6">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/fundraiser/:id" element={<FundraiserDetails />} />
          <Route path="/auth" element={<SignInPage />} />
          <Route path="/confirmation-page" element={<ConfirmationPage />} />
          <Route path="/donation-page" element={<DonationPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
           
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:id" element={<CommunityChat />} />
          
          <Route path="/jobs" element={<Jobspage />} />
          <Route path="/discussion-forum" element={<QnASection />} />
          <Route path="/event-management" element={<EventManagement />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
