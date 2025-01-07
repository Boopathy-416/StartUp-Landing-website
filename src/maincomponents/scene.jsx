import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls, Scroll } from "@react-three/drei";
import { Sections } from "./section.jsx";
import { Background } from "./background.jsx";
import Hero from "./section/Hero.jsx";
import About from "./section/About.jsx";
import Referral from "./section/Referral.jsx";
import Footer from "./section/Footer.jsx";

export default function Scene() {
  return (
    <div className="w-full h-screen bg-[#000000bb]">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5],
        }}
      >
        {/*   preset?: 'sunset' | 'night' | 'dawn' | 'city' | 'forest' | string;
 */}
        <Environment preset="night" />
        <ScrollControls pages={4} damping={0.25}>
          {/* 3D Background */}
          <Background />

          {/* 3D Content */}
          <Sections />

          {/* HTML Content */}
          <Scroll html>
            <div className="w-screen">
              {/* Home Section */}

              <Hero />

              {/* About Section */}
              <About />

              {/* Referral Section */}
              <Referral />

              {/* Footer Section */}
              <Footer />
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
