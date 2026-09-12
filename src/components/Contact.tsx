import { MdArrowOutward, MdCopyright, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn, FaFilePdf } from "react-icons/fa";
import "./styles/Contact.css";

import HoverLinks from "./HoverLinks";

const whyIndigoPoints = [
  {
    title: "Aviation Leadership & Punctuality",
    desc: "Renowned for on-time performance, operational excellence, and disciplined precision, inspiring pride in every flight sector.",
  },
  {
    title: "Customer Experience & Courteous Service",
    desc: "A warm, customer-first service culture where empathy, approachable cabin crew, and hassle-free journeys define the brand.",
  },
  {
    title: "Uncompromising Safety Standards",
    desc: "Operating one of the world's youngest, most fuel-efficient modern Airbus fleets under rigorous DGCA and international safety benchmarks.",
  },
  {
    title: "Dynamic Teamwork & Fast-Paced Growth",
    desc: "Seamless collaboration between flight crew, ground teams, and cabin colleagues during quick, efficient aircraft turnarounds.",
  },
  {
    title: "Learning & Long-Term Aviation Career",
    desc: "A merit-driven environment offering world-class training programs, leadership pathways, and the opportunity to build an illustrious career in aviation.",
  },
];

const Contact = () => (
  <div className="contact-section section-container" id="contact">
    <div className="contact-container">
      <div className="why-indigo-section" id="why-indigo">
        <span className="section-tag">INDIGO CABIN CREW ASPIRANT</span>
        <h2>WHY INDIGO?</h2>
        <p className="why-indigo-lead">
          "IndiGo represents an exciting opportunity for me to begin my journey in aviation.
          I am interested in a professional environment where safety, customer experience,
          teamwork, discipline and continuous learning are important."
        </p>

        <div className="why-indigo-grid">
          {whyIndigoPoints.map((item) => (
            <div className="why-indigo-card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-divider" />

      <div className="takeoff-section">
        <span className="section-tag">FINAL CALL TO ACTION</span>
        <h3>READY TO TAKE OFF</h3>
        <p className="takeoff-subtext">
          Confident. Professional. Customer-focused. Ready to begin a career in aviation.
        </p>

        <div className="takeoff-cta-row">
          <a
            href="#readiness"
            className="takeoff-btn takeoff-btn-primary"
            data-cursor="disable"
          >
            <FaFilePdf className="btn-icon" />
            <HoverLinks text="VIEW RESUME" />
          </a>
          <a
            href="mailto:[YOUR EMAIL]"
            className="takeoff-btn takeoff-btn-secondary"
            data-cursor="disable"
          >
            <MdEmail className="btn-icon" />
            <HoverLinks text="CONTACT ME" />
          </a>
        </div>
      </div>

      <div className="contact-flex">
        <div className="contact-box">
          <h4>Candidate Information</h4>
          <p className="contact-info-line">
            <span className="info-label">Name:</span> Vidhi Joshi (20 • Female)
          </p>
          <p className="contact-info-line">
            <MdEmail className="inline-icon" />
            <a href="mailto:[YOUR EMAIL]" data-cursor="disable">
              [YOUR EMAIL]
            </a>
          </p>
          <p className="contact-info-line">
            <MdPhone className="inline-icon" />
            <a href="tel:[YOUR PHONE]" data-cursor="disable">
              [YOUR PHONE]
            </a>
          </p>
          <p className="contact-info-line">
            <MdLocationOn className="inline-icon" />
            [YOUR LOCATION]
          </p>
        </div>

        <div className="contact-box">
          <h4>Navigation & Dossier</h4>
          <p>
            <a
              href="[YOUR LINKEDIN]"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
              data-cursor="disable"
            >
              <FaLinkedinIn /> LinkedIn Profile <MdArrowOutward />
            </a>
          </p>
          <a href="#about" className="contact-social" data-cursor="disable">
            About Vidhi <MdArrowOutward />
          </a>
          <a href="#competencies" className="contact-social" data-cursor="disable">
            Why Cabin Crew & Strengths <MdArrowOutward />
          </a>
          <a href="#grooming" className="contact-social" data-cursor="disable">
            Professional Grooming <MdArrowOutward />
          </a>
          <a href="#readiness" className="contact-social" data-cursor="disable">
            Vidhi Is Interview Ready <MdArrowOutward />
          </a>
        </div>

        <div className="contact-box">
          <h2>
            VIDHI JOSHI
            <br />
            <span>Cabin Crew Aspirant</span>
          </h2>
          <p className="brand-tagline">
            Ready to learn. Ready to serve. Ready to soar.
          </p>
          <h5>
            <MdCopyright /> 2026 Vidhi Joshi. All Rights Reserved.
          </h5>
        </div>
      </div>

      <div className="recruitment-disclaimers">
        <p className="recruitment-note">
          <strong>Official Verification:</strong> Recruitment requirements and walk-in interview details may change. Always verify the latest information through official IndiGo recruitment channels.
        </p>
        <p className="recruitment-note safety-alert">
          <strong>Recruitment Safety Note:</strong> Never pay money for a job interview or recruitment opportunity. Verify recruitment information through official channels.
        </p>
      </div>
    </div>
  </div>
);

export default Contact;


