const particlesConfig = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 450.559045649141,
      },
    },
    color: {
      value: "#add8e6",
    },
    shape: {
      type: "square",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 6,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: false,
        speed: 5,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 180,
      color: "#add8e6",
      opacity: 0.1,
      width: 6,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      straight: true,
      random: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 10000,
        rotateY: 800,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 50,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

export default particlesConfig;
