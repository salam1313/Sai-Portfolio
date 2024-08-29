document.addEventListener('DOMContentLoaded', () => {
  const loading = document.getElementById('loading');
  const progressBarFill = document.querySelector('.progress-bar-fill');

  setTimeout(() => {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);

    // Animate the progress bar
    progressBarFill.style.width = '100%';
    setTimeout(() => {
      progressBarFill.style.display = 'none';
    }, 2000);
  }, 2000);

  // Add smooth scrolling to navbar links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Handle slider animation for skills
  const skillsSlider = document.querySelector('.skills-slider');
  let isDragging = false;
  let startX;
  let scrollLeft;

  skillsSlider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - skillsSlider.offsetLeft;
    scrollLeft = skillsSlider.scrollLeft;
  });

  skillsSlider.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  skillsSlider.addEventListener('mouseup', () => {
    isDragging = false;
  });

  skillsSlider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - skillsSlider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    skillsSlider.scrollLeft = scrollLeft - walk;
  });

  // Adjust project image heights for consistent display
  const projectImages = document.querySelectorAll('.project-img');
  projectImages.forEach(img => {
    img.style.height = 'auto'; // Reset height to automatic
  });

  // Add hover effect to skill icons
  const skillIcons = document.querySelectorAll('.skill-icon');
  skillIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.color = '#00bfa5';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.color = '#ffffff';
    });
  });
});