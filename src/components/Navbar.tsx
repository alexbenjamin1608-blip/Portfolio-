import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.7, speed: 1.7, effects: true, autoResize: true, ignoreMobileResize: true });
    smoother.scrollTop(0); smoother.paused(true);
    const links = document.querySelectorAll(".header ul a");
    const handlers: Array<() => void> = [];
    links.forEach((elem) => {
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const section = (e.currentTarget as HTMLAnchorElement).getAttribute("data-href");
          if (section) smoother.scrollTo(section, true, "top top");
        }
      };
      elem.addEventListener("click", handler); handlers.push(() => elem.removeEventListener("click", handler));
    });
    return () => handlers.forEach((cleanup) => cleanup());
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          VIDHI JOSHI
        </a>
        <a
          href="mailto:[YOUR EMAIL]"
          className="navbar-connect"
          data-cursor="disable"
        >
          [YOUR EMAIL]
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#competencies" href="#competencies">
              <HoverLinks text="WHY CABIN CREW" />
            </a>
          </li>
          <li>
            <a data-href="#skills" href="#skills">
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a data-href="#grooming" href="#grooming">
              <HoverLinks text="GROOMING" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="SCENARIOS" />
            </a>
          </li>
          <li>
            <a data-href="#readiness" href="#readiness">
              <HoverLinks text="WALK-IN DOSSIER" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>
      <div className="landing-circle1"></div><div className="landing-circle2"></div><div className="nav-fade"></div>
    </>
  );
};
export default Navbar;
