export const handleResize = (setState) => {
  if (window.innerWidth >= 768 && setState) { // Example: 768px is a breakpoint
    setState(false); // Hide menu
  } else if(setState) {
    setState(true); // Show menu
  }
};