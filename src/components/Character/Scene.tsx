import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import "../styles/Landing.css";

gsap.registerPlugin(ScrollTrigger);

function makeMat(color: string, roughness = 0.65, metalness = 0.05) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness });
}

function createCabinCrew() {
  const root = new THREE.Group();
  root.name = "cabinCrewCharacter";

  // Palette - IndiGo Signature Aviation Colors
  const skin = makeMat("#e2a882", 0.85, 0.0);
  const skinShadow = makeMat("#cf926d", 0.9, 0.0);
  const hair = makeMat("#181920", 0.75, 0.05);
  const indigoNavy = makeMat("#0a2558", 0.6, 0.05);
  const indigoDark = makeMat("#061738", 0.65, 0.05);
  const blouseWhite = makeMat("#f6f8fc", 0.5, 0.0);
  const scarfSilk = makeMat("#0072ce", 0.4, 0.2);
  const scarfAccent = makeMat("#e02568", 0.45, 0.1);
  const goldWings = makeMat("#f5c442", 0.25, 0.9);
  const silverBadge = makeMat("#e0e6ed", 0.2, 0.9);
  const shoeBlack = makeMat("#101217", 0.35, 0.15);
  const lips = makeMat("#c84860", 0.45, 0.05);
  const eyeColor = makeMat("#15171d", 0.2, 0.1);
  const pearl = makeMat("#ffffff", 0.15, 0.4);

  const hips = new THREE.Group();
  hips.name = "hips";
  root.add(hips);

  // Pencil Skirt (Aviation Uniform)
  const skirt = new THREE.Mesh(
    new THREE.CylinderGeometry(0.74, 0.88, 1.5, 32),
    indigoDark
  );
  skirt.position.y = 2.75;
  hips.add(skirt);

  // Waist belt & buckle
  const waistBelt = new THREE.Mesh(
    new THREE.CylinderGeometry(0.68, 0.74, 0.28, 32),
    indigoDark
  );
  waistBelt.position.y = 3.48;
  hips.add(waistBelt);

  const buckle = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.16, 0.08),
    silverBadge
  );
  buckle.position.set(0, 3.48, 0.72);
  hips.add(buckle);

  // Torso / Tailored Cabin Crew Jacket
  const torsoGroup = new THREE.Group();
  torsoGroup.name = "torsoGroup";
  torsoGroup.position.y = 4.55;
  hips.add(torsoGroup);

  const jacket = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.88, 1.45, 8, 24),
    indigoNavy
  );
  torsoGroup.add(jacket);

  // Crisp White Blouse peek at V-neck
  const blouse = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.64, 1.15, 8, 20),
    blouseWhite
  );
  blouse.scale.set(0.72, 1, 0.65);
  blouse.position.set(0, 0.18, 0.48);
  torsoGroup.add(blouse);

  // Left & Right Jacket Lapels
  const lapelGeo = new THREE.BoxGeometry(0.22, 0.9, 0.08);
  const leftLapel = new THREE.Mesh(lapelGeo, indigoDark);
  leftLapel.position.set(-0.28, 0.22, 0.78);
  leftLapel.rotation.set(0.12, 0.15, -0.25);
  torsoGroup.add(leftLapel);

  const rightLapel = new THREE.Mesh(lapelGeo, indigoDark);
  rightLapel.position.set(0.28, 0.22, 0.78);
  rightLapel.rotation.set(0.12, -0.15, 0.25);
  torsoGroup.add(rightLapel);

  // Aviation Silk Scarf / Ascot
  const scarfRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.36, 0.08, 12, 24),
    scarfSilk
  );
  scarfRing.rotation.x = Math.PI / 2 + 0.1;
  scarfRing.position.set(0, 0.65, 0.58);
  torsoGroup.add(scarfRing);

  // Scarf knot & decorative tail
  const scarfKnot = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 14, 12),
    scarfAccent
  );
  scarfKnot.position.set(0.12, 0.58, 0.72);
  torsoGroup.add(scarfKnot);

  const scarfTail = new THREE.Mesh(
    new THREE.ConeGeometry(0.12, 0.35, 12),
    scarfSilk
  );
  scarfTail.position.set(0.15, 0.38, 0.74);
  scarfTail.rotation.z = -0.3;
  scarfTail.rotation.x = 0.2;
  torsoGroup.add(scarfTail);

  // Aviation Wings Badge (Gold Wings on Left Chest)
  const badgeGroup = new THREE.Group();
  badgeGroup.position.set(0.46, 0.4, 0.86);

  const centerShield = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 16, 12),
    goldWings
  );
  centerShield.scale.set(1, 1.2, 0.4);
  badgeGroup.add(centerShield);

  const wingLeft = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.06, 0.03),
    goldWings
  );
  wingLeft.position.set(-0.16, 0.02, 0);
  wingLeft.rotation.z = 0.22;
  badgeGroup.add(wingLeft);

  const wingRight = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.06, 0.03),
    goldWings
  );
  wingRight.position.set(0.16, 0.02, 0);
  wingRight.rotation.z = -0.22;
  badgeGroup.add(wingRight);

  // Silver Name Tag Badge
  const namePlate = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.09, 0.03),
    silverBadge
  );
  namePlate.position.set(0, -0.16, 0.01);
  badgeGroup.add(namePlate);

  torsoGroup.add(badgeGroup);

  // Neck
  const neck = new THREE.Mesh(
    new THREE.CylinderGeometry(0.24, 0.27, 0.55, 24),
    skin
  );
  neck.position.y = 5.68;
  hips.add(neck);

  // Head Group
  const head = new THREE.Group();
  head.name = "head";
  head.position.y = 6.38;
  hips.add(head);

  // Face
  const face = new THREE.Mesh(
    new THREE.SphereGeometry(0.74, 32, 26),
    skin
  );
  face.scale.set(0.86, 1.06, 0.86);
  head.add(face);

  // Hair Base (Neat side-parted cabin crew style)
  const hairCap = new THREE.Mesh(
    new THREE.SphereGeometry(0.8, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.68),
    hair
  );
  hairCap.position.y = 0.18;
  hairCap.scale.set(1.02, 1.02, 0.98);
  head.add(hairCap);

  // Sleek Cabin Crew Donut Bun at back of head
  const bunGroup = new THREE.Group();
  bunGroup.position.set(0, 0.72, -0.42);

  const bunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.36, 24, 20),
    hair
  );
  bunMesh.scale.set(1, 0.9, 0.85);
  bunGroup.add(bunMesh);

  const bunRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.28, 0.03, 12, 24),
    goldWings
  );
  bunRing.position.set(0, 0, 0.1);
  bunGroup.add(bunRing);

  head.add(bunGroup);

  // Eyes (Almond shape)
  const eyeGeo = new THREE.SphereGeometry(0.055, 14, 14);
  const eyeL = new THREE.Mesh(eyeGeo, eyeColor);
  eyeL.position.set(-0.23, 0.08, 0.71);
  head.add(eyeL);

  const eyeR = new THREE.Mesh(eyeGeo, eyeColor);
  eyeR.position.set(0.23, 0.08, 0.71);
  head.add(eyeR);

  // Eyebrows
  const browGeo = new THREE.BoxGeometry(0.18, 0.03, 0.02);
  const browL = new THREE.Mesh(browGeo, hair);
  browL.position.set(-0.24, 0.22, 0.72);
  browL.rotation.z = 0.1;
  head.add(browL);

  const browR = new THREE.Mesh(browGeo, hair);
  browR.position.set(0.24, 0.22, 0.72);
  browR.rotation.z = -0.1;
  head.add(browR);

  // Subtle Natural Smile
  const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.16, 0.028, 8, 20, Math.PI),
    lips
  );
  smile.position.set(0, -0.22, 0.72);
  smile.rotation.z = Math.PI;
  head.add(smile);

  // Pearl Stud Earrings
  const earL = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 12, 12),
    pearl
  );
  earL.position.set(-0.68, 0.02, 0.12);
  head.add(earL);

  const earR = new THREE.Mesh(
    new THREE.SphereGeometry(0.045, 12, 12),
    pearl
  );
  earR.position.set(0.68, 0.02, 0.12);
  head.add(earR);

  // Arms with tailored sleeves and graceful hands
  const makeArm = (side: number) => {
    const arm = new THREE.Group();
    arm.name = side < 0 ? "leftArm" : "rightArm";
    arm.position.set(side * 0.94, 4.75, 0);

    // Blazer sleeve
    const upper = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.23, 1.2, 6, 18),
      indigoNavy
    );
    upper.rotation.z = side * -0.1;
    upper.position.y = -0.38;
    arm.add(upper);

    // Cuff button
    const button = new THREE.Mesh(
      new THREE.SphereGeometry(0.035, 10, 10),
      goldWings
    );
    button.position.set(side * 0.2, -0.85, 0.12);
    arm.add(button);

    // Hand in poised, relaxed air-hostess posture
    const hand = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 18, 14),
      skin
    );
    hand.scale.set(0.7, 1.1, 0.85);
    hand.position.set(side * 0.04, -1.2, 0.04);
    arm.add(hand);

    hips.add(arm);
    return arm;
  };
  const leftArm = makeArm(-1);
  const rightArm = makeArm(1);

  // Legs with sheer stockings and cabin crew court shoes
  const makeLeg = (side: number) => {
    const leg = new THREE.Group();
    leg.name = side < 0 ? "leftLeg" : "rightLeg";
    leg.position.set(side * 0.32, 2.15, 0);

    const thigh = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.25, 1.38, 6, 18),
      skinShadow
    );
    thigh.position.y = -0.62;
    leg.add(thigh);

    // Court shoe (leather pump with modest heel)
    const shoeGroup = new THREE.Group();
    shoeGroup.position.set(0, -1.45, 0.16);

    const shoeBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.18, 0.85),
      shoeBlack
    );
    shoeGroup.add(shoeBody);

    const heel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.06, 0.25, 12),
      shoeBlack
    );
    heel.position.set(0, -0.16, -0.24);
    shoeGroup.add(heel);

    leg.add(shoeGroup);
    hips.add(leg);
    return leg;
  };
  const leftLeg = makeLeg(-1);
  const rightLeg = makeLeg(1);

  root.userData.parts = {
    hips,
    torsoGroup,
    head,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
    badgeGroup,
  };
  root.scale.setScalar(1.15);
  return root;
}

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    const mount = canvasDiv.current;
    if (!mount) return;
    const rect = mount.getBoundingClientRect();
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      14.5,
      rect.width / rect.height,
      0.1,
      100
    );
    camera.position.set(0, 5.2, 24);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);

    // Lighting setup - Runway & cabin ambiance
    scene.add(new THREE.HemisphereLight("#e2edff", "#061226", 2.4));

    const keyLight = new THREE.DirectionalLight("#ffffff", 4.2);
    keyLight.position.set(6, 12, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight("#a6c8ff", 2.2);
    fillLight.position.set(-6, 4, 8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight("#4f8cff", 22, 35);
    rimLight.position.set(-6, 6, -3);
    scene.add(rimLight);

    const character = createCabinCrew();
    character.position.set(0, -3.35, 0);
    scene.add(character);

    const parts = character.userData.parts as {
      hips: THREE.Group;
      torsoGroup: THREE.Group;
      head: THREE.Group;
      leftArm: THREE.Group;
      rightArm: THREE.Group;
      leftLeg: THREE.Group;
      rightLeg: THREE.Group;
      badgeGroup: THREE.Group;
    };

    const progress = setProgress(setLoading);
    progress.loaded();

    // Mouse Tracking Parallax
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // Entrance Animation
    const intro = gsap.timeline();
    intro.fromTo(
      character.scale,
      { x: 0.1, y: 0.1, z: 0.1 },
      { x: 1.15, y: 1.15, z: 1.15, duration: 1.7, ease: "back.out(1.5)" }
    );
    intro.fromTo(
      character.position,
      { y: -4.4 },
      { y: -3.35, duration: 1.4, ease: "power3.out" },
      0.1
    );

    // Scroll Choreography across all key sections
    const isDesktop = window.innerWidth > 1024;
    const timelines: gsap.core.Timeline[] = [];

    if (isDesktop) {
      // 1. Landing to About Section: character shifts left and rotates slightly to welcome
      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
      aboutTl
        .to(character.position, { x: -2.3, y: -3.6, duration: 1 }, 0)
        .to(character.rotation, { y: -0.48, x: 0.06, duration: 1 }, 0)
        .to(camera.position, { z: 25, y: 5.5, duration: 1 }, 0);
      timelines.push(aboutTl);

      // 2. What I Do / Competencies Section: character turns to present skills
      const whatTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".whatIDO",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
      whatTl
        .to(character.position, { x: 2.1, y: -3.4, duration: 1 }, 0)
        .to(character.rotation, { y: 0.42, x: 0.04, duration: 1 }, 0)
        .to(camera.position, { z: 26, y: 5.4, duration: 1 }, 0);
      timelines.push(whatTl);

      // 3. Career / Readiness Timeline Section: character shifts left to frame timeline
      const careerTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".career-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
      careerTl
        .to(character.position, { x: -2.1, y: -3.5, duration: 1 }, 0)
        .to(character.rotation, { y: -0.32, x: 0.02, duration: 1 }, 0)
        .to(camera.position, { z: 27, y: 5.6, duration: 1 }, 0);
      timelines.push(careerTl);

      // 4. Interview Prep / Work Section: character steps back slightly for card scrub
      const workTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
      workTl
        .to(character.position, { x: 0, y: -3.8, duration: 1 }, 0)
        .to(character.rotation, { y: 0.05, x: 0.02, duration: 1 }, 0)
        .to(camera.position, { z: 29, y: 5.8, duration: 1 }, 0);
      timelines.push(workTl);

      // 5. Contact Section: character returns forward with greeting stance
      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
      contactTl
        .to(character.position, { x: 1.8, y: -3.35, duration: 1 }, 0)
        .to(character.rotation, { y: -0.22, x: 0, duration: 1 }, 0)
        .to(camera.position, { z: 24, y: 5.2, duration: 1 }, 0);
      timelines.push(contactTl);
    }

    // Gentle continuous breathing / poise cycle
    const clock = new THREE.Clock();
    let frame = 0;

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse damping
      tx += (mx * 0.16 - tx) * 0.06;
      ty += (my * 0.1 - ty) * 0.06;

      // Mouse Parallax & Head tracking
      character.rotation.x += (ty * -0.12 - character.rotation.x) * 0.025;
      parts.head.rotation.y = tx * 0.72;
      parts.head.rotation.x = ty * 0.32;

      // Natural Breathing & Subtle Arm Sway
      const breath = Math.sin(t * 1.3);
      parts.torsoGroup.scale.set(
        1 + breath * 0.012,
        1 + breath * 0.008,
        1 + breath * 0.012
      );
      parts.leftArm.rotation.z = Math.sin(t * 0.85) * 0.03 - 0.04;
      parts.rightArm.rotation.z = Math.sin(t * 0.85 + 0.8) * 0.03 + 0.04;
      parts.leftLeg.rotation.z = Math.sin(t * 0.65) * 0.008;
      parts.rightLeg.rotation.z = -Math.sin(t * 0.65) * 0.008;

      // Subtle float
      character.position.y += Math.sin(t * 1.1) * 0.0012;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const r = mount.getBoundingClientRect();
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
      renderer.setSize(r.width, r.height);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      intro.kill();
      timelines.forEach((tl) => tl.kill());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" ref={canvasDiv}>
        <div className="character-rim" />
      </div>
    </div>
  );
};

export default Scene;

