import { useState } from "react";
import "./styles/InterviewChecklist.css";
import { FaChevronDown, FaFileAlt, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";


const vidhiPreparationItems = [
  "Personal profile prepared (Vidhi Joshi • 20 • Female • Cabin Crew Aspirant)",
  "Professional resume prepared",
  "Communication skills prepared (Fluent English & Hindi articulation)",
  "Self-introduction prepared (Polished aviation introduction)",
  "Customer-service scenarios prepared (Empathy & passenger care)",
  "Grooming and presentation prepared (Western formals, neat bun & court shoes)",
  "Common interview questions practiced (12 core airline questions)",
  "Airline knowledge prepared (IndiGo punctuality, fleet & customer culture)",
  "Required documents checklist prepared",
];

const verifyCurrentRequirements = [
  {
    criteria: "Minimum Height",
    status: "VERIFY CURRENT REQUIREMENT",
    instruction: "Check latest official IndiGo notice for exact barefoot height standards (typically 155 cm).",
  },
  {
    criteria: "Educational Qualification",
    status: "VERIFY CURRENT REQUIREMENT",
    instruction: "Check latest official IndiGo notice for minimum 10+2 / graduate criteria from recognized board/university.",
  },
  {
    criteria: "Age Requirement",
    status: "VERIFY CURRENT REQUIREMENT",
    instruction: "Check latest official IndiGo notice for walk-in age bracket (typically 18 to 27 years).",
  },
  {
    criteria: "BMI & Weight Proportion",
    status: "VERIFY CURRENT REQUIREMENT",
    instruction: "Check latest official notice for DGCA / airline BMI and proportionate weight guidelines.",
  },
  {
    criteria: "Valid Indian Passport",
    status: "VERIFY CURRENT REQUIREMENT",
    instruction: "Verify validity duration and document requirements per current recruitment guidelines.",
  },
  {
    criteria: "Tattoo & Piercing Policy",
    status: "VERIFY CURRENT REQUIREMENT",
    instruction: "Confirm official policy prohibiting visible tattoos or piercings in cabin crew uniform.",
  },
];

const documentItems = [
  "Updated Resume / CV (Printed hard copies)",
  "Passport-size photographs (Recent formal photographs)",
  "10th marksheet (Original and self-attested photocopies)",
  "12th marksheet (Original and self-attested photocopies)",
  "Aadhaar Card (Original government ID and photocopies)",
  "PAN Card (Original government ID and photocopies)",
  "Passport (Original valid Indian Passport and photocopies)",
  "Any additional documents mentioned in the latest official recruitment notice",
];

const interviewQuestions = [
  {
    q: "1. Tell me about yourself.",
    points:
      "Deliver a crisp, confident introduction: 'I am Vidhi Joshi, a 20-year-old cabin crew aspirant passionate about aviation, hospitality and passenger care. I bring fluent communication in English and Hindi, strong empathy, active listening and a safety-first mindset ready to represent IndiGo.'",
  },
  {
    q: "2. Why do you want to become cabin crew?",
    points:
      "For me, cabin crew is more than a job. It is an opportunity to work with people, provide exceptional service, ensure passenger safety and represent an airline with confidence and professionalism in a fast-paced environment.",
  },
  {
    q: "3. Why do you want to join IndiGo?",
    points:
      "IndiGo represents an exciting opportunity for me to begin my journey in aviation. I am interested in a professional environment where safety, customer experience, teamwork, discipline and continuous learning are important.",
  },
  {
    q: "4. What does good customer service mean to you?",
    points:
      "Good customer service means creating a welcoming, comfortable and positive passenger experience through attentive care, genuine empathy, active listening and prompt problem-solving.",
  },
  {
    q: "5. How would you handle an angry passenger?",
    points:
      "Stay calm and composed, listen carefully to their concern without interrupting, acknowledge their frustration with empathy, apologize for the inconvenience, and find a polite, constructive solution within airline safety SOPs.",
  },
  {
    q: "6. How do you handle pressure?",
    points:
      "I remain calm under pressure by prioritizing passenger safety first, staying organized, communicating clearly with my team, and maintaining a composed, reassuring presence.",
  },
  {
    q: "7. What are your strengths?",
    points:
      "My core strengths are confident bilingual communication (English and Hindi), active listening, customer-service empathy, professional grooming, calm demeanor under evaluation, and collaborative teamwork.",
  },
  {
    q: "8. What is one area you are working to improve?",
    points:
      "I continuously work on expanding my aviation terminology, learning conversational phrases in additional languages, and deepening my understanding of in-flight safety protocols.",
  },
  {
    q: "9. How would you handle a difficult passenger?",
    points:
      "I listen patiently with empathy, maintain a polite and professional tone, de-escalate the tension, consult the Senior Cabin Crew member when appropriate, and ensure cabin peace and safety.",
  },
  {
    q: "10. What would you do during an emergency?",
    points:
      "Follow emergency safety procedures instantly and precisely, execute cockpit and Senior Crew commands, guide passengers with assertive and calm clarity, and prioritize passenger life and security above all else.",
  },
  {
    q: "11. How would you handle disagreement with a teammate?",
    points:
      "I prioritize flight safety and passenger experience above personal opinions, listen respectfully to my colleague's viewpoint, maintain teamwork harmony, and focus on collaborative solutions.",
  },
  {
    q: "12. Why should we select you?",
    points:
      "You should select me because I am a dedicated, well-groomed, and customer-focused candidate who is genuinely passionate about aviation. I am eager to learn, disciplined, ready to serve, and committed to upholding IndiGo's high standards of safety and hospitality.",
  },
];

export default function InterviewChecklist() {
  const [expandedQ, setExpandedQ] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setExpandedQ(expandedQ === index ? null : index);
  };

  return (
    <section className="interview-checklist section-container" id="readiness">
      <div className="checklist-heading">
        <span className="checklist-subhead">WALK-IN INTERVIEW DOSSIER</span>
        <h2>VIDHI IS INTERVIEW READY</h2>
        <p>
          A structured candidate dossier detailing walk-in preparation, verification
          guidelines, documentation requirements, and model interview practice.
        </p>
      </div>

      <div className="recruitment-banner">
        <div className="banner-badge">OFFICIAL NOTICE</div>
        <p>
          Always verify the latest eligibility criteria, age brackets, height requirements,
          and walk-in event schedules on the official IndiGo careers page before attending.
        </p>
      </div>

      <div className="checklist-grid">
        <article className="check-card">
          <div className="card-title-row">
            <FaCheckCircle className="card-icon" />
            <h3>Vidhi's Readiness Checklist</h3>
          </div>
          <p className="card-note">Core interview preparation milestones completed:</p>
          <ul>
            {vidhiPreparationItems.map((item, idx) => (
              <li key={idx}>
                <span className="check-sym">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="check-card">
          <div className="card-title-row">
            <FaFileAlt className="card-icon" />
            <h3>Eligibility Guidelines</h3>
          </div>
          <p className="card-note">Verify against current official IndiGo recruitment circular:</p>
          <ul className="verify-list">
            {verifyCurrentRequirements.map((req, idx) => (
              <li key={idx} className="verify-item">
                <div className="verify-row">
                  <span className="verify-criteria">{req.criteria}</span>
                  <span className="verify-badge">{req.status}</span>
                </div>
                <span className="verify-inst">{req.instruction}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="document-checklist-block">
        <div className="doc-header">
          <FaFileAlt className="card-icon" />
          <div>
            <h3>DOCUMENT CHECKLIST</h3>
            <p className="doc-subtitle">
              Always verify the latest document requirements before attending the walk-in interview.
            </p>
          </div>
        </div>
        <div className="doc-grid">
          {documentItems.map((doc, idx) => (
            <div className="doc-item" key={idx}>
              <span className="doc-num">0{idx + 1}</span>
              <span className="doc-text">{doc}</span>
            </div>
          ))}
        </div>
        <p className="doc-footer-note">
          Notice: Carry original documents along with required self-attested photocopies as specified in the official recruitment notice.
        </p>
      </div>

      <div className="prep-section">
        <div className="prep-header">
          <span className="prep-subtag">PRACTICE & MODEL RESPONSES</span>
          <h3>INTERVIEW PREPARATION</h3>
          <p className="prep-desc">
            12 essential interview questions for cabin crew candidates. Click each question to explore
            Vidhi's structured talking points and discussion frameworks.
          </p>
        </div>

        <div className="questions-accordion">
          {interviewQuestions.map((item, index) => {
            const isOpen = expandedQ === index;
            return (
              <div
                key={index}
                className={`accordion-item ${isOpen ? "open" : ""}`}
                onClick={() => toggleQuestion(index)}
                data-cursor="disable"
              >
                <div className="accordion-question">
                  <h4>{item.q}</h4>
                  <FaChevronDown className={`chevron-icon ${isOpen ? "rotated" : ""}`} />
                </div>
                {isOpen && (
                  <div className="accordion-answer">
                    <p>{item.points}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="safety-warning-box">
        <div className="warning-header">
          <FaExclamationTriangle className="warning-icon" />
          <h4>IMPORTANT: Recruitment Safety & Anti-Fraud Notice</h4>
        </div>
        <p>
          IndiGo recruitment information should always be verified through official IndiGo careers
          and hiring-event channels. Never pay money for a job interview or recruitment opportunity.
          IndiGo does not charge any placement fee or deposit at any stage of the recruitment process.
        </p>
      </div>
    </section>
  );
}



