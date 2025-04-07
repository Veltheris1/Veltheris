// Wait until everything (HTML, CSS, images) is fully loaded
window.addEventListener('load', () => {
  
    // === Animate <h2> Headings on Load ===
    const headings = document.querySelectorAll('.animated-heading');
  
    headings.forEach((heading) => {
      const direction = Math.random() < 0.5 ? 'from-left' : 'from-right';
      heading.classList.add(direction);
  
      // Add 'visible' class after a small random delay
      setTimeout(() => {
        heading.classList.add('visible');
      }, Math.random() * 1000 + 500); // Between 500ms and 1500ms
    });
  
    // === Animate Sections on Scroll (Intersection Observer) ===
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Reset if needed
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the section is visible
    });
  
    // Observe all elements with .animated-section class
    const sections = document.querySelectorAll('.animated-section');
    sections.forEach(section => observer.observe(section));
  
  });
  