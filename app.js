particlesJS("particles-js", {
  particles: {
    number: {
      value: 20,
      density: { enable: true, value_area: 800 },
    },
    color: { value: "#6A7BA2" },
    shape: { type: "star" },
    opacity: { value: 1, random: true },
    size: { value: 6, random: true },
    line_linked: {
      enable: true,
      distance: 250,
      color: "#8B0000",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "out",
    },
  },
});