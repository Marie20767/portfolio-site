const showAnimation = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.5,
  },
};

const pageAnimation = {
  hidden: {
    // fade out and slide down
    opacity: 0,
    y: 300,
  },
  show: showAnimation,
  showAbout: {
    ...showAnimation,
    transition: {
      ...showAnimation.transition,
      delay: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.4,
    },
  },
};

export { pageAnimation };
