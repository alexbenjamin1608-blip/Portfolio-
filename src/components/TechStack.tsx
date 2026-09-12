import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

const skillsData = [
  { name: "English Communication", category: "communication", desc: "Clear articulation, refined grammar and fluent passenger dialog." },
  { name: "Hindi Communication", category: "communication", desc: "Fluent, polite conversational skill for domestic and connecting flyers." },
  { name: "Customer Service", category: "service", desc: "Delivering thoughtful, courteous, and hassle-free onboard hospitality." },
  { name: "Public Speaking", category: "communication", desc: "Poised delivery of safety briefings and cabin announcements." },
  { name: "Teamwork", category: "operations", desc: "Synchronized collaboration with cockpit, cabin, and ground crew." },
  { name: "Empathy", category: "service", desc: "Compassionate understanding of passenger anxieties and special needs." },
  { name: "Problem Solving", category: "operations", desc: "Quick-thinking and pragmatic resolutions to onboard challenges." },
  { name: "Passenger Handling", category: "service", desc: "Seamless boarding assistance, luggage stowage and seating care." },
  { name: "Conflict Management", category: "service", desc: "Diplomatic de-escalation of difficult or demanding situations." },
  { name: "Adaptability", category: "operations", desc: "Thriving across changing flight rosters, time zones, and turnarounds." },
  { name: "Time Management", category: "operations", desc: "Punctual reporting, rapid cabin prep, and strictly on-time departures." },
  { name: "Professional Etiquette", category: "professionalism", desc: "Polite demeanor, respectful conduct, and airline protocol mastery." },
  { name: "Grooming", category: "professionalism", desc: "Impeccable personal hygiene, uniform standards, and polished look." },
  { name: "Positive Attitude", category: "service", desc: "Radiating energy, enthusiasm, and warmth on every flight sector." },
  { name: "Safety Awareness", category: "operations", desc: "Uncompromising vigilance regarding aviation security and emergency protocols." },
  { name: "Confidence", category: "professionalism", desc: "Self-assured presence, upright posture, and reassuring authority." },
  { name: "Active Listening", category: "communication", desc: "Attentive focus on flyer concerns with empathetic acknowledgment." },
  { name: "Calmness Under Pressure", category: "operations", desc: "Steadfast composure during turbulence, delays, or medical situations." },
];

function SkillCloud({ selectedCategory }: { selectedCategory: string }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.elapsedTime * 0.08;
    }
  });

  const N = skillsData.length;
  const radius = 5.8;

  return (
    <group ref={group}>
      {skillsData.map((skill, i) => {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * 0.55 * Math.cos(phi);
        const z = radius * Math.sin(theta) * Math.sin(phi);

        const isHighlighted =
          selectedCategory === "all" || skill.category === selectedCategory;

        return (
          <Float
            key={skill.name}
            speed={1.2}
            rotationIntensity={0.2}
            floatIntensity={0.5}
          >
            <Text
              position={[x, y, z]}
              fontSize={0.34}
              color={isHighlighted ? "#ffffff" : "#41506b"}
              anchorX="center"
              anchorY="middle"
              maxWidth={3.2}
              textAlign="center"
            >
              {skill.name.toUpperCase()}
            </Text>
          </Float>
        );
      })}
    </group>
  );
}

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="techstack" id="skills">
      <div className="skills-header-wrap">
        <span className="skills-subtag">COMPETENCY MATRIX</span>
        <h2>MY CORE SKILLS</h2>
        <p className="skills-lead">
          Essential behavioral, communication, safety, and hospitality competencies
          honed for high-altitude passenger excellence.
        </p>

        <div className="skills-filter-nav">
          {[
            { id: "all", label: "All Skills (18)" },
            { id: "communication", label: "Communication" },
            { id: "service", label: "Customer Care" },
            { id: "operations", label: "Safety & Operations" },
            { id: "professionalism", label: "Etiquette & Grooming" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`skills-filter-btn ${selectedCategory === tab.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(tab.id)}
              data-cursor="disable"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-canvas-wrap">
        <Canvas camera={{ position: [0, 0, 16], fov: 35 }} dpr={[1, 1.5]}>
          <ambientLight intensity={1.5} />
          <pointLight position={[5, 5, 8]} intensity={30} distance={30} />
          <SkillCloud selectedCategory={selectedCategory} />
          <Environment preset="city" environmentIntensity={0.35} />
        </Canvas>
      </div>

      <div className="skills-chips-container">
        {skillsData
          .filter((s) => selectedCategory === "all" || s.category === selectedCategory)
          .map((s) => (
            <div
              key={s.name}
              className={`skill-chip ${activeSkill === s.name ? "active" : ""}`}
              onClick={() => setActiveSkill(activeSkill === s.name ? null : s.name)}
              data-cursor="disable"
            >
              <div className="chip-name">{s.name}</div>
              {activeSkill === s.name && <div className="chip-desc">{s.desc}</div>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TechStack;

