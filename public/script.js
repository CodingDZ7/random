// Ensure DOM is fully loaded before execution
document.addEventListener('DOMContentLoaded', () => {
    // Random Quote
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');
  
    async function fetchQuote() {
      try {
        const response = await fetch('/api/quote');
        const data = await response.json();
        quoteElement.textContent = data.quote;
      } catch (error) {
        console.error('Error fetching quote:', error);
        quoteElement.textContent = 'Failed to load quote.';
      }
    }
  
    newQuoteButton.addEventListener('click', fetchQuote);
  
    // Random Animation
    const animatedBox = document.getElementById('animated-box');
  
    async function fetchAnimation() {
      try {
        const response = await fetch('/api/animation');
        const data = await response.json();
        animatedBox.style.animation = `${data.animation} ${data.duration}s infinite`;
      } catch (error) {
        console.error('Error fetching animation:', error);
        animatedBox.style.animation = 'none'; // Fallback in case of failure
      }
    }
  
    fetchAnimation();
  
    // Falling Object Game
    const fallingObject = document.getElementById('falling-object');
  
    async function moveFallingObject() {
      try {
        const response = await fetch('/api/falling-object');
        const data = await response.json();
        fallingObject.style.left = `${data.position}%`;
      } catch (error) {
        console.error('Error fetching falling object position:', error);
      }
    }
  
    // Move the object every 2 seconds
    setInterval(moveFallingObject, 2000);
  
    // Rainbow RGB Background
    let hue = 0;
  
    function animateBackground() {
      document.body.style.background = `hsl(${hue}, 100%, 50%)`;
      hue = (hue + 1) % 360; // Increment hue and loop back at 360
      requestAnimationFrame(animateBackground);
    }
  
    animateBackground(); // Start the animation loop
  
    // Button to Change Background
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'button-container';
  
    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Random Colors';
  
    buttonContainer.appendChild(changeColorButton);
    document.body.appendChild(buttonContainer);
  
    changeColorButton.addEventListener('click', () => {
      document.body.style.background = getRandomGradient();
    });
  
    // Random Gradient Function
    function getRandomGradient() {
      const randomHue1 = Math.floor(Math.random() * 360);
      const randomHue2 = Math.floor(Math.random() * 360);
      return `linear-gradient(45deg, hsl(${randomHue1}, 100%, 50%), hsl(${randomHue2}, 100%, 50%))`;
    }
  });
  