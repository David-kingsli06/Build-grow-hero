import Navbar from "./components/Navbar";
import ParticleWave from "./components/ParticleWave";
import HeroContent from "./components/HeroContent";
import ProofBar from "./components/ProofBar";

export default function Home() {
  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#08080a] text-white flex flex-col justify-between selection:bg-red-500 selection:text-white">
      {/* 3D Wave Particle Canvas Background */}
      <ParticleWave />

      {/* Atmospheric Radial Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.015)_0%,rgba(8,8,10,0.5)_50%,rgba(8,8,10,0.92)_100%)]"
        aria-hidden="true"
      />

      {/* Top Floating Glass Navigation Bar */}
      <Navbar />

      {/* Hero Section Centerpiece (Centered vertically & horizontally without page scroll) */}
      <HeroContent />

      {/* Bottom Proof & Metrics Footer Bar (Pinned at bottom, compact & responsive) */}
      <ProofBar />
    </main>
  );
}
