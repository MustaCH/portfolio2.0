let dropdown = document.querySelector("#dropdown");
let toggleMenu = document.querySelector("#toggle-menu");
let closeMenu = document.querySelector("#close-menu");

const OpenSidebar = () => {
  dropdown.classList.add("scale-100", "transition-transform", "duration-150");
  toggleMenu.classList.add("opacity-0", "transition-opacity", "duration-150");
  closeMenu.classList.remove("hidden");
};

const CloseSidebar = () => {
  dropdown.classList.remove("scale-100");
  toggleMenu.classList.remove("opacity-0");
  closeMenu.classList.add("hidden");
};

const animateOnScroll = () => {
  const containers = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(containers).indexOf(entry.target);
        const delay = index * 100;
        entry.target.style.animationDelay = `${delay}ms`;
        entry.target.classList.add(
          "scale-100",
          "transition-transform",
          "duration-300",
        );
      }
    });
  });

  containers.forEach((container) => {
    observer.observe(container);
  });
};

animateOnScroll();
