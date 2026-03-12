import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const SakuraParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        detectRetina: true,
        particles: {
          number: {
            // ▼▼ 修正: 花びらの数を「30」から「45」に気持ち増やしました ▼▼
            value: 45, 
            density: { enable: true }, 
          },
          color: { value: "#ffffff" }, 
          shape: {
            type: "image",
            options: {
              image: {
                src: "/sakura.png", 
                width: 100,
                height: 100,
              },
            },
          },
          opacity: {
            value: { min: 0.4, max: 0.8 },
            animation: { enable: true, speed: 0.5, sync: false },
          },
          size: {
            // ▼▼ 修正: 花びらのサイズを全体的に1.5倍ほど大きくしました ▼▼
            value: { min: 18, max: 32 }, 
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 }, 
            direction: "bottom",
            random: true,
            straight: false, 
            outModes: {
              default: "out",
              top: "none",
            },
          },
          rotate: {
            value: { min: 0, max: 360 }, 
            animation: { enable: true, speed: 5, sync: false },
          },
        },
      }}
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
};

export default SakuraParticles;