// Typewriter effect
const typewriter = document.querySelector('.typewriter');
const words = ["Problem Solver.", "Critical Thinker.", "Fast Learner.", "Team Worker."];
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
  currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typewriter.textContent = currentWord.substring(0, charIndex);

  let speed = 200;
  if (isDeleting) speed /= 2;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();

// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

// Toggle menu
const toggle = document.querySelector('.toggle');
const navUl = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

// Scroll to top on logo click
document.querySelector('.logo').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// --- tsParticles Integration: Different Effects per Theme ---

// Store the active tsParticles container instance
let particlesContainer;

// --- Define your Dark Mode Particles Configuration ---
const darkModeParticlesConfig = {
  background: {
    color: {
      value: "#121212" // Deep dark background
    }
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#00adb5" // Teal particles
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 1.5
    },
    links: {
      enable: true, // Ensure links are enabled
      distance: 150,
      color: "#00adb5", // Teal links
      opacity: 0.4 // Slightly increased opacity for better visibility
    }
  },
};

// --- Define your Light Mode Particles Configuration (Example: "Snow" or "Confetti") ---
const lightModeParticlesConfig = {
  background: {
    color: {
      value: "#f0f0f0" // Light background
    }
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#888888" // Grey particles for snow
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.7
    },
    size: {
      value: 5,
      random: true
    },
    links: {
      enable: false // No links for a snow effect
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      },
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse"
      },
      onClick: {
        enable: false,
        mode: "push"
      }
    }
  },
};

// Function to initialize tsParticles with a given config
async function initializeParticles(config) {
  // If there's an existing container, destroy it first to clear the canvas
  if (particlesContainer) {
    await particlesContainer.destroy();
    particlesContainer = null; // Clear the reference
  }

  // Load the new particles configuration
  try {
    particlesContainer = await tsParticles.load("tsparticles", config);
    console.log("tsParticles initialized with new config. Background color:", config.background.color.value);
  } catch (error) {
    console.error("Error initializing tsParticles:", error);
  }
}

// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Set initial theme and particles effect on page load
if (document.body.classList.contains('light')) {
  themeToggle.textContent = '🌞';
  initializeParticles(lightModeParticlesConfig);
} else {
  themeToggle.textContent = '🌙';
  initializeParticles(darkModeParticlesConfig);
}

// Add event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light'); // Toggle the body class

  if (document.body.classList.contains('light')) {
    themeToggle.textContent = '🌞'; // Update icon to sun
    initializeParticles(lightModeParticlesConfig); // Load light mode particles
  } else {
    themeToggle.textContent = '🌙'; // Update icon to moon
    initializeParticles(darkModeParticlesConfig); // Load dark mode particles
  }
});


// --- Scroll Reveal Animations (AOS) ---
// Initialize AOS library
AOS.init({
  duration: 1000, // animation duration
  once: true,     // whether animation should happen only once - while scrolling down
});


// --- Back to Top Button ---
const backToTopButton = document.getElementById('back-to-top');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show button after scrolling 300px
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to top
  });
});