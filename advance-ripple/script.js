document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("ripple-button");

  // Customization variables
  const rippleClass = "ripple";
  const rippleScale = 10;
  const rippleDuration = 600;

  button.addEventListener("click", function (e) {
    // Remove existing ripples
    this.querySelectorAll(`.${rippleClass}`).forEach((ripple) => ripple.remove());

    // Create new ripple
    const ripple = document.createElement("span");
    ripple.classList.add(rippleClass);

    // Append ripple to the button
    this.appendChild(ripple);

    // Calculate the position of the click relative to the button
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - ripple.offsetWidth / 2;
    const y = e.clientY - rect.top - ripple.offsetHeight / 2;

    // Set the position of the ripple
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Trigger the animation
    setTimeout(() => {
      ripple.style.opacity = "1";
      ripple.style.transform = `scale(${rippleScale})`; // Increase the scale
    }, 0);

    // Remove the ripple after the animation
    setTimeout(() => {
      ripple.remove();
    }, rippleDuration);
  });
});
