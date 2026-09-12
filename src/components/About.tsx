import "./styles/About.css";
import {
  FaComments,
  FaSmileBeam,
  FaUsers,
  FaHeartbeat,
  FaCrown,
  FaBolt,
  FaSun,
  FaHandsHelping,
} from "react-icons/fa";

const qualities = [
  {
    icon: <FaComments />,
    title: "Confident Communicator",
    desc: "Articulate and poised speaking in English and Hindi, active listening and courteous delivery.",
  },
  {
    icon: <FaSmileBeam />,
    title: "Customer Focused",
    desc: "Dedicated to passenger comfort, warm welcomes, attentive service and positive journey memories.",
  },
  {
    icon: <FaUsers />,
    title: "Team Player",
    desc: "Collaborating seamlessly with cabin crew, flight deck and ground staff for efficient turnarounds.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Calm Under Pressure",
    desc: "Composed, steady and reassuring during unexpected flight delays, turbulence or urgent needs.",
  },
  {
    icon: <FaCrown />,
    title: "Professional & Well Groomed",
    desc: "Neat cabin crew hairstyle, polished uniform etiquette, elegant posture and pristine personal grooming.",
  },
  {
    icon: <FaBolt />,
    title: "Quick Learner",
    desc: "Swift to absorb airline SOPs, safety instructions, emergency equipment and service workflows.",
  },
  {
    icon: <FaSun />,
    title: "Positive Attitude",
    desc: "Approaching every flight sector and passenger interaction with genuine warmth, energy and smile.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Service Oriented",
    desc: "Proactive assistance for senior citizens, families, PRM passengers and travelers needing extra care.",
  },
];

const About = () => (
  <div className="about-section" id="about">
    <div className="about-me">
      <h3 className="title">ABOUT ME</h3>
      <p className="para">
        Hello, I'm Vidhi Joshi, a 20-year-old cabin crew aspirant with a strong
        passion for aviation, hospitality and customer service. I aspire to build
        a professional career in the aviation industry where I can combine
        confident communication, empathy, teamwork and a commitment to passenger
        safety.
      </p>

      <div className="about-cards-grid">
        {qualities.map((card) => (
          <div className="about-card" key={card.title}>
            <div className="about-card-icon">{card.icon}</div>
            <div className="about-card-content">
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;


