import { useEffect } from "react";
import "./styles/Career.css";
import { setAllTimeline } from "./utils/GsapScroll";

const groomingMilestones = [
  {
    num: "01",
    title: "Neat Professional Hairstyle",
    subtitle: "Professional Appearance",
    desc: "Sleek, well-secured donut bun or neat cabin crew hairstyle with hairnet, free of flyaways, ensuring an unobstructed face and polished overall presentation.",
  },
  {
    num: "02",
    title: "Appropriate Interview Attire",
    subtitle: "Dress & Court Shoes",
    desc: "Well-fitted western formal attire, tailored blazer, pencil skirt or formal trousers, sheer stockings, and classic closed-toe court shoes.",
  },
  {
    num: "03",
    title: "Well-Maintained Nails & Makeup",
    subtitle: "Clean Grooming",
    desc: "Clean and well-maintained nails in neutral polish, subtle daytime makeup enhancing natural features, and pristine personal grooming standards.",
  },
  {
    num: "04",
    title: "Confident Posture & Body Language",
    subtitle: "Natural Professional Smile",
    desc: "Straight posture, poised shoulders, open gestures, sustained eye contact, professional body language, and a warm, natural professional smile.",
  },
  {
    num: "05",
    title: "Clear Speech & Polite Cadence",
    subtitle: "Diction & Tone",
    desc: "Clear speech in English and Hindi, respectful cadence, calm demeanor under evaluation, and courteous verbal etiquette.",
  },
];

const Career = () => {
  useEffect(() => {
    setAllTimeline();
  }, []);

  return (
    <div className="career-section section-container" id="grooming">
      <div className="career-container">
        <div className="grooming-header-block">
          <span className="grooming-tag">FIRST IMPRESSION MATTERS</span>
          <h2>
            PROFESSIONAL <span>GROOMING</span>
          </h2>
          <p className="grooming-lead">
            In aviation hospitality, your presence speaks before words do. Meticulous grooming,
            disciplined body language, and poised etiquette create immediate confidence with
            passengers and recruiters alike.
          </p>
          <div className="dress-code-notice">
            <span>Official Dress Code Note:</span> Attire specifications may vary across walk-in events.
            Always verify the latest dress code guidelines in the official IndiGo recruitment notice.
          </div>
        </div>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>
          {groomingMilestones.map((m) => (
            <div className="career-info-box" key={m.num}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{m.title}</h4>
                  <h5>{m.subtitle}</h5>
                </div>
                <h3>{m.num}</h3>
              </div>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

