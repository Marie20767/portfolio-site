const showAnimation = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.65,
  },
};

export const PageAnimation = {
  hidden: {
    // fade out and slide down
    opacity: 0,
    y: 300,
  },
  show: showAnimation,
  showContact: {
    ...showAnimation,
    backgroundColor: '#fff',
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.65,
    },
  },
};
