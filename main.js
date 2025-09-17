// Move all your <script> content here (except Tailwind CDN)
// Example:
document.getElementById("year").textContent = new Date().getFullYear();
// ...rest of your JS...

document.querySelectorAll('.animate-fade-in-up').forEach(el => {
  el.style.opacity = 0;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(el);
});