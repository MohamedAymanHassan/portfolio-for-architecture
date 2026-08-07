/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BlueprintSection } from "./components/BlueprintSection";
import { Expertise } from "./components/Expertise";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Metrics } from "./components/Metrics";
import { TechStack } from "./components/TechStack";
import { Testimonials } from "./components/Testimonials";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main>
        <Hero />
        <BlueprintSection />
        <Expertise />
        <Process />
        <Projects />
        <Metrics />
        <TechStack />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
