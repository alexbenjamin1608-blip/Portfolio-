import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false); const [isLoaded, setIsLoaded] = useState(false); const [clicked, setClicked] = useState(false);
  if (percent >= 100) setTimeout(() => { setLoaded(true); setTimeout(() => setIsLoaded(true), 1000); }, 600);
  useEffect(() => { import("./utils/initialFX").then((module) => { if (isLoaded) { setClicked(true); setTimeout(() => { module.initialFX(); setIsLoading(false); }, 900); } }); }, [isLoaded, setIsLoading]);
  function handleMouseMove(e: React.MouseEvent<HTMLElement>) { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mouse-x", `${e.clientX-r.left}px`); e.currentTarget.style.setProperty("--mouse-y", `${e.clientY-r.top}px`); }
  return <>
    <div className="loading-header"><a href="/#" className="loader-title" data-cursor="disable">VIDHI JOSHI</a><div className={`loaderGame ${clicked && "loader-out"}`}><div className="loaderGame-container"><div className="loaderGame-in">{[...Array(27)].map((_,i)=><div className="loaderGame-line" key={i}></div>)}</div><div className="loaderGame-ball"></div></div></div></div>
    <div className="loading-screen"><div className="loading-marquee"><Marquee><span>VIDHI JOSHI</span><span>READY TO SOAR</span><span>CABIN CREW ASPIRANT</span><span>READY TO SOAR</span></Marquee></div><div className={`loading-wrap ${clicked && "loading-clicked"}`} onMouseMove={handleMouseMove}><div className="loading-hover"></div><div className={`loading-button ${loaded && "loading-complete"}`}><div className="loading-container"><div className="loading-content"><div className="loading-content-in">Loading <span>{percent}%</span></div></div><div className="loading-box"></div></div><div className="loading-content2"><span>Welcome Aboard</span></div></div></div></div>

  </>;
};
export default Loading;
export const setProgress = (setLoading: (value: number) => void) => { let percent=0; let interval=setInterval(()=>{ percent=Math.min(percent+(percent<=50?Math.round(Math.random()*5):Math.round(Math.random())),99); setLoading(percent); },100); function clear(){clearInterval(interval);setLoading(100);} function loaded(){return new Promise<number>((resolve)=>{clearInterval(interval);interval=setInterval(()=>{percent++;setLoading(percent);if(percent>=100){clearInterval(interval);resolve(100);}},10);});} return {loaded,percent,clear}; };
