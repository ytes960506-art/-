// Smooth scroll for anchor links
// Courses
const courses = [
  {
    name: "經濟學",
    semester: "2025 Spring",
    category: "商業",
    link: "#",
    skills: ["供需分析", "市場結構"],
    description: "理解市場運作與資源配置"
  },
  {
    name: "刑法",
    semester: "2025 Fall",
    category: "法律",
    link: "#",
    skills: ["案例分析", "責任判斷"],
    description: "學習犯罪構成要件"
  }
];

// Projects
const projects = [
  {
    name: "寺廟密度分析",
    shortDescription: "宗教與人口關聯",
    techStack: ["Excel", "分析"],
    github: "#",
    status: "Completed"
  },
  {
    name: "個人網站",
    shortDescription: "作品展示平台",
    techStack: ["HTML", "CSS", "JS"],
    github: "#",
    status: "In Progress"
  }
];
// Courses Render
const coursesContainer = document.getElementById("courses-container");

courses.forEach(course => {
  const div = document.createElement("div");
  div.className = "course-card";

  div.innerHTML = `
    <div class="course-title">${course.name}</div>
    <div class="course-meta">${course.semester} • ${course.category}</div>
    <div>${course.description}</div>
    <div class="course-skills">${course.skills.join(", ")}</div>
  `;

  coursesContainer.appendChild(div);
});


// Projects Render
const projectsContainer = document.getElementById("projects-container");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project-card";

  div.innerHTML = `
    <div class="project-title">${project.name}</div>
    <div class="project-desc">${project.shortDescription}</div>
    <div class="project-tags">${project.techStack.join(" • ")}</div>
  `;

  projectsContainer.appendChild(div);
});

// Skills Render
const skillsContainer = document.getElementById("skills-container");

Object.entries(skills).forEach(([category, list]) => {
  const div = document.createElement("div");
  div.className = "skill-group";

  div.innerHTML = `
    <div class="skill-title">${category.toUpperCase()}</div>
    <div class="skill-list">
      ${list.map(skill => `<span>${skill}</span>`).join("")}
    </div>
  `;

  skillsContainer.appendChild(div);
});
// Skills
const skills = {
  programming: ["JavaScript"],
  ai_ml: ["AI工具應用"],
  web: ["HTML", "CSS"],
  tools: ["Excel", "設計", "畫畫"]
};
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
