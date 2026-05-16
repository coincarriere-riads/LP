import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Trust from "@/components/landing/Trust";
import HowItWorks from "@/components/landing/HowItWorks";
import RiadBenefits from "@/components/landing/RiadBenefits";
import DashboardDemo from "@/components/landing/DashboardDemo";
import Features from "@/components/landing/Features";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

function Landing() {
  return (
    <div data-testid="landing-root" className="min-h-screen bg-soft-bg text-ink">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Trust />
        <HowItWorks />
        <RiadBenefits />
        <DashboardDemo />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
