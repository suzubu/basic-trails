// Store the current mouse coordinates
let mouse = { x: 0, y: 0 };

// Track mouse movement and trigger trail creation on every move
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  createTrail(); // Generate a trail element at the cursor
});

function createTrail() {
  // Create a new trail div element
  const trail = document.createElement("div");
  trail.classList.add("trail"); // Assign styling from CSS
  document.body.appendChild(trail);

  // Set the initial position using GSAP (center the trail on the cursor)
  gsap.set(trail, {
    x: mouse.x - 25, // Offset to center the circle
    y: mouse.y - 25,
    scale: 1,
    opacity: 1,
  });

  // Animate the trail: shrink and fade it out, then remove from DOM
  gsap.to(trail, {
    duration: 1, // ← typo fixed from 'duratin'
    opacity: 0,
    scale: 0.5,
    ease: "power2.out",
    onComplete: () => {
      trail.remove(); // Clean up after animation ends
    },
  });
}
