import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
        background: {
            image: 'linear-gradient(to bottom,rgb(18, 120, 151),rgb(44, 141, 226))', // Apply gradient as background image
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "bubble", // Change to 'bubble' mode for size increase on click
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            size: 10, // Size to increase to on click
            opacity: 0.8,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF", // Particle color
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: false, // Disable links for a cleaner bubble effect
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "top", // Move particles from bottom to top
          enable: true,
          outModes: {
            default: "out", // Particles disappear when out of canvas
          },
          random: false,
          speed: 1, // Adjust speed for slower movement
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Area for particle density
          },
          value: 50, // Number of particles
        },
        opacity: {
          value: 0.5, // Opacity of particles
        },
        shape: {
          type: "circle", // Shape of particles
        },
        size: {
          value: { min: 3, max: 7 }, // Size range of particles
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
