import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const readiness = [
  [
    "01",
    "Self Introduction",
    "Deliver a crisp, polished introduction highlighting background, passion for flight hospitality, and why you are the ideal cultural fit for IndiGo.",
    "/images/prep-1.svg",
  ],
  [
    "02",
    "Why Cabin Crew?",
    "Articulate a genuine passion for passenger care, aviation safety stewardship, cultural adaptability, and flourishing in dynamic airline flight rosters.",
    "/images/prep-2.svg",
  ],
  [
    "03",
    "Why IndiGo Airlines?",
    "Demonstrate knowledge of IndiGo's punctuality leadership, fuel-efficient modern Airbus fleet, pan-India connectivity, and employee-first growth culture.",
    "/images/prep-3.svg",
  ],
  [
    "04",
    "Difficult Passenger Scenario",
    "Showcase active listening, empathy, de-escalation skills, problem solving, and unwavering adherence to aviation safety protocols without losing composure.",
    "/images/prep-4.svg",
  ],
  [
    "05",
    "Crew Teamwork & Harmony",
    "Demonstrate mutual respect, seamless coordination with cockpit and cabin colleagues, and adaptability during rapid aircraft turnarounds.",
    "/images/prep-5.svg",
  ],
  [
    "06",
    "Safety Awareness & Emergencies",
    "Exhibit a safety-first mindset, emergency equipment vigilance, SOP compliance, and reassuring authority during turbulence or medical events.",
    "/images/prep-6.svg",
  ],
];

const Work = () => {
  useGSAP(() => {
    const boxes = document.getElementsByClassName("work-box");
    if (!boxes.length) return;
    const first = boxes[0] as HTMLElement;
    const parent = first.parentElement as HTMLElement;
    const translateX = Math.max(0, first.offsetWidth * boxes.length - parent.clientWidth + 80);
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: ".work-section", start: "top top", end: `+=${translateX}`, scrub: true, pin: true, id: "work" },
    });
    timeline.to(".work-flex", { x: -translateX, ease: "none" });
    return () => { timeline.kill(); ScrollTrigger.getById("work")?.kill(); };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>Interview <span>Prep</span></h2>
        <div className="work-flex">
          {readiness.map(([num, title, desc, img]) => (
            <div className="work-box" key={num}>
              <div className="work-info">
                <div className="work-title"><h3>{num}</h3><div><h4>{title}</h4><p>Cabin Crew</p></div></div>
                <h4>What to demonstrate</h4><p>{desc}</p>
              </div>
              <WorkImage image={img} alt={`${title} interview preparation`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
