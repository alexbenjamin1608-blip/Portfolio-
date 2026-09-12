import { useEffect, useRef, useState } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShieldAlt, FaHandsHelping, FaComments, FaUsersCog } from "react-icons/fa";

const whyCabinCrewCards = [
  {
    id: "safety",
    icon: <FaShieldAlt />,
    title: "SAFETY",
    subtitle: "Vigilance & Security",
    headline: "Keeping passenger safety and security at the heart of every journey.",
    description:
      "Constant alertness toward aircraft safety protocols, emergency awareness, compliance with aviation guidelines, and protective leadership.",
    tags: [
      "Safety Awareness",
      "Passenger Security",
      "Emergency Awareness",
      "Pre-flight Preparation",
      "Calmness Under Pressure",
    ],
  },
  {
    id: "service",
    icon: <FaHandsHelping />,
    title: "SERVICE",
    subtitle: "Hospitality & Care",
    headline: "Creating a welcoming, comfortable and positive passenger experience.",
    description:
      "Welcoming travelers with a sincere smile, anticipating passenger needs, assisting seniors/infants, and delivering attentive hospitality onboard.",
    tags: [
      "Customer Service",
      "Passenger Handling",
      "Empathy",
      "Positive Attitude",
      "Conflict Management",
    ],
  },
  {
    id: "communication",
    icon: <FaComments />,
    title: "COMMUNICATION",
    subtitle: "Clarity & Respect",
    headline: "Communicating clearly, confidently and respectfully with passengers and colleagues.",
    description:
      "Fluent expression in English and Hindi, active listening, reassuring announcements, and polite interpersonal engagement at all times.",
    tags: [
      "English Communication",
      "Hindi Communication",
      "Active Listening",
      "Confident Speaking",
      "Professional Tone",
    ],
  },
  {
    id: "teamwork",
    icon: <FaUsersCog />,
    title: "TEAMWORK",
    subtitle: "Synergy & Pace",
    headline: "Working together efficiently in a fast-paced aviation environment.",
    description:
      "Cooperating closely with cabin crew members, Captain, flight deck, and ground operations to guarantee smooth flights and rapid turnarounds.",
    tags: [
      "Teamwork",
      "Team Coordination",
      "Time Management",
      "Adaptability",
      "Problem Solving",
    ],
  },
];

const roleResponsibilities = [
  "Passenger safety and security as the foremost priority on every sector",
  "Thorough pre-flight cabin safety checks and emergency equipment readiness",
  "Delivering clear, professional in-flight safety demonstrations and announcements",
  "Welcoming flyers warmly and providing attentive in-flight meal & beverage service",
  "Dedicated passenger assistance, including special care for PRM, elderly, and infants",
  "Emergency awareness and immediate adherence to DGCA safety procedures",
  "Clear, respectful passenger communication and prompt assistance for queries",
  "Close team coordination with cockpit, cabin crew, and ground staff",
  "Maintaining world-class professional service standards throughout every flight",
  "Representing the airline professionally with pride, elegance, and integrity",
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<"pillars" | "communication" | "experience" | "role">("pillars");

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;
    const handlers: Array<() => void> = [];
    containerRef.current.forEach((container) => {
      if (!container) return;
      const handler = () => handleClick(container);
      container.classList.remove("what-noTouch");
      container.addEventListener("click", handler);
      handlers.push(() => container.removeEventListener("click", handler));
    });
    return () => handlers.forEach((cleanup) => cleanup());
  }, []);

  return (
    <div className="whatIDO" id="competencies">
      <div className="what-box">
        <div className="what-header-group">
          <span className="what-subhead">VIDHI'S ASPIRATION & STRENGTHS</span>
          <h2 className="title">
            W<span className="hat-h2">HY</span>
            <div>
              C<span className="do-h2">ABIN CREW?</span>
            </div>
          </h2>
          <p className="what-lead-para">
            For me, cabin crew is more than a job. It is an opportunity to work with
            people, provide exceptional service, ensure passenger safety and represent
            an airline with confidence and professionalism.
          </p>

          <div className="what-tab-nav">
            <button
              className={`what-tab-btn ${activeTab === "pillars" ? "active" : ""}`}
              onClick={() => setActiveTab("pillars")}
              data-cursor="disable"
            >
              4 Core Pillars
            </button>
            <button
              className={`what-tab-btn ${activeTab === "communication" ? "active" : ""}`}
              onClick={() => setActiveTab("communication")}
              data-cursor="disable"
            >
              Communication
            </button>
            <button
              className={`what-tab-btn ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
              data-cursor="disable"
            >
              Passenger Experience
            </button>
            <button
              className={`what-tab-btn ${activeTab === "role" ? "active" : ""}`}
              onClick={() => setActiveTab("role")}
              data-cursor="disable"
            >
              The Role
            </button>
          </div>
        </div>
      </div>

      <div className="what-box">
        {activeTab === "pillars" && (
          <div className="what-box-in">
            {whyCabinCrewCards.map((card, index) => (
              <div
                className="what-content what-noTouch"
                key={card.title}
                ref={(el) => setRef(el, index)}
              >
                <div className="what-border1" />
                <div className="what-corner" />
                <div className="what-content-in">
                  <div className="what-content-title-row">
                    <h3>{card.title}</h3>
                    <span className="what-icon-badge">{card.icon}</span>
                  </div>
                  <h4>{card.subtitle}</h4>
                  <p className="what-card-headline">"{card.headline}"</p>
                  <p className="what-card-desc">{card.description}</p>
                  <h5>Key Competencies</h5>
                  <div className="what-content-flex">
                    {card.tags.map((tag) => (
                      <div className="what-tags" key={tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div className="what-arrow" />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "communication" && (
          <div className="what-detail-panel">
            <div className="what-panel-header">
              <span className="panel-tag">CORE STRENGTH</span>
              <h3>COMMUNICATION IS MY STRENGTH</h3>
              <p className="panel-lead">
                "Clear and respectful communication helps passengers feel informed,
                comfortable and confident throughout their journey."
              </p>
            </div>
            <div className="what-detail-grid">
              <div className="detail-item">
                <h4>Clear English Communication</h4>
                <p>Fluent and articulate speech to assist domestic and international travelers with poise.</p>
              </div>
              <div className="detail-item">
                <h4>Hindi Communication</h4>
                <p>Polite, natural conversational fluency to connect warmly with flyers across regions.</p>
              </div>
              <div className="detail-item">
                <h4>Active Listening</h4>
                <p>Focusing intently on passenger requests and validating concerns before responding.</p>
              </div>
              <div className="detail-item">
                <h4>Confident Speaking</h4>
                <p>Clear, calm and articulate delivery for safety briefings and personal assistance.</p>
              </div>
              <div className="detail-item">
                <h4>Professional Tone</h4>
                <p>Respectful, polite, and reassuring vocal cadence in routine and urgent situations.</p>
              </div>
              <div className="detail-item">
                <h4>Positive Body Language</h4>
                <p>Upright posture, receptive eye contact, graceful gestures and an approachable demeanor.</p>
              </div>
              <div className="detail-item">
                <h4>Passenger Interaction</h4>
                <p>Attentive, courteous engagement throughout boarding, in-flight, and deplaning.</p>
              </div>
              <div className="detail-item">
                <h4>Conflict Resolution</h4>
                <p>Diplomatic de-escalation of misunderstandings with patience and policy adherence.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="what-detail-panel">
            <div className="what-panel-header">
              <span className="panel-tag">CUSTOMER SERVICE</span>
              <h3>PASSENGER EXPERIENCE</h3>
              <p className="panel-lead">
                Delivering genuine warmth, attentive hospitality and composure across every flight sector.
              </p>
            </div>
            <div className="what-detail-grid">
              <div className="detail-item">
                <h4>Welcoming Passengers Professionally</h4>
                <p>Warm boarding greetings that establish an inviting, respectful onboard environment.</p>
              </div>
              <div className="detail-item">
                <h4>Listening Carefully to Concerns</h4>
                <p>Giving complete attention to seating, baggage, or comfort queries with empathy.</p>
              </div>
              <div className="detail-item">
                <h4>Providing Clear Information</h4>
                <p>Offering accurate and transparent flight updates to keep travelers relaxed.</p>
              </div>
              <div className="detail-item">
                <h4>Showing Empathy</h4>
                <p>Understanding nervous travelers, fatigue, and special needs with heartfelt care.</p>
              </div>
              <div className="detail-item">
                <h4>Maintaining Patience</h4>
                <p>Composed, graceful demeanor even during congested cabins and tight schedules.</p>
              </div>
              <div className="detail-item">
                <h4>Handling Difficult Situations Calmly</h4>
                <p>De-escalating tense moments constructively without losing emotional balance.</p>
              </div>
              <div className="detail-item">
                <h4>Creating a Positive Passenger Experience</h4>
                <p>Ensuring every flyer leaves the aircraft with a memorable and comfortable journey.</p>
              </div>
              <div className="detail-item">
                <h4>Maintaining Professionalism Under Pressure</h4>
                <p>Upholding exemplary service discipline during turbulence or schedule changes.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "role" && (
          <div className="what-detail-panel">
            <div className="what-panel-header">
              <span className="panel-tag">CABIN CREW RESPONSIBILITIES</span>
              <h3>THE ROLE I AM PREPARING FOR</h3>
              <p className="panel-lead">
                An unwavering dedication to passenger safety, security, hospitality and brand integrity.
              </p>
            </div>
            <ul className="role-checklist">
              {roleResponsibilities.map((resp, i) => (
                <li key={i}>
                  <span className="role-check-icon">✓</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    Array.from(container.parentElement.children).forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

