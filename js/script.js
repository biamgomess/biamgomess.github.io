const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const progressBar = document.getElementById("progressBar");

navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, value))}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

document.getElementById("year").textContent = new Date().getFullYear();

/* Skills explorer */
const skillData = {
  programming: {
    code: "A.01",
    title: "Programming & Data",
    text: "Languages and libraries used to clean, transform, model and visualize structured and experimental data.",
    tools: ["Python", "Pandas", "NumPy", "SQL", "R", "tidyverse", "MATLAB"],
    applied: "Machine-learning projects, experimental data pipelines and engineering analysis."
  },
  ml: {
    code: "A.02",
    title: "Machine Learning",
    text: "Methods used to develop, validate and interpret predictive models with an emphasis on clear evaluation.",
    tools: ["Classification", "Regression", "Clustering", "Decision Trees", "Model Evaluation", "scikit-learn", "caret"],
    applied: "Biomedical classification, model comparison, cross-validation and performance interpretation."
  },
  analytics: {
    code: "A.03",
    title: "Data Analytics",
    text: "Analytical methods for converting raw datasets into reliable indicators, patterns and visual explanations.",
    tools: ["Data Cleaning", "EDA", "Correlation Analysis", "Descriptive Statistics", "Data Visualization", "KPIs"],
    applied: "Quality indicators, financial datasets, operational dashboards and research data."
  },
  digital: {
    code: "A.04",
    title: "Digital Solutions",
    text: "Tools used to turn operational requirements into practical interfaces, automated workflows and structured data systems.",
    tools: ["Looker Studio", "AppSheet", "Google Apps Script", "HTML", "CSS", "JavaScript"],
    applied: "Dashboards, request workflows, workload planning automation and interactive web projects."
  }
};

const skillTabs = document.querySelectorAll(".skill-tab");
const skillDetailCode = document.getElementById("skillDetailCode");
const skillDetailTitle = document.getElementById("skillDetailTitle");
const skillDetailText = document.getElementById("skillDetailText");
const skillTools = document.getElementById("skillTools");
const skillApplied = document.getElementById("skillApplied");

skillTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    skillTabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const data = skillData[tab.dataset.skill];
    skillDetailCode.textContent = data.code;
    skillDetailTitle.textContent = data.title;
    skillDetailText.textContent = data.text;
    skillApplied.textContent = data.applied;
    skillTools.innerHTML = data.tools.map((tool) => `<span>${tool}</span>`).join("");
  });
});

/* Project carousel */
const projectTrack = document.getElementById("projectTrack");
const slides = Array.from(document.querySelectorAll(".project-slide"));
const dots = Array.from(document.querySelectorAll(".carousel-dot"));
const prevProject = document.getElementById("prevProject");
const nextProject = document.getElementById("nextProject");
const currentProject = document.getElementById("currentProject");
let projectIndex = 0;

function showProject(index) {
  projectIndex = (index + slides.length) % slides.length;
  projectTrack.style.transform = `translateX(-${projectIndex * 100}%)`;
  currentProject.textContent = String(projectIndex + 1).padStart(2, "0");

  slides.forEach((slide, i) => slide.classList.toggle("active", i === projectIndex));
  dots.forEach((dot, i) => {
    const active = i === projectIndex;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-selected", String(active));
  });
}

prevProject.addEventListener("click", () => showProject(projectIndex - 1));
nextProject.addEventListener("click", () => showProject(projectIndex + 1));
dots.forEach((dot) => {
  dot.addEventListener("click", () => showProject(Number(dot.dataset.index)));
});

document.addEventListener("keydown", (event) => {
  const projects = document.getElementById("projects");
  const rect = projects.getBoundingClientRect();
  const visible = rect.top < window.innerHeight && rect.bottom > 0;
  if (!visible) return;
  if (event.key === "ArrowLeft") showProject(projectIndex - 1);
  if (event.key === "ArrowRight") showProject(projectIndex + 1);
});

let touchStartX = null;
projectTrack.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
}, { passive: true });

projectTrack.addEventListener("touchend", (event) => {
  if (touchStartX === null) return;
  const diff = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(diff) > 45) {
    showProject(projectIndex + (diff < 0 ? 1 : -1));
  }
  touchStartX = null;
}, { passive: true });

showProject(0);
