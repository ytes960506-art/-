// 1. Data Definitions
const courses = [
  {
    name: "經濟學",
    semester: "2025 Spring",
    category: "商業",
    skills: ["供需分析", "市場結構"],
    description: "理解市場運作與資源配置，探索法律規範對市場行為的誘因影響。"
  },
  {
    name: "刑法",
    semester: "2025 Fall",
    category: "法律",
    skills: ["案例分析", "責任判斷"],
    description: "學習犯罪構成要件，並探討法律正義與社會安全之間的平衡點。"
  }
];

const projects = [
  {
    name: "寺廟密度分析",
    shortDescription: "結合地理資訊與社會數據，探討宗教場所分布與人口密度之關聯。",
    techStack: ["Excel", "Spatial Analysis"],
    status: "Completed"
  },
  {
    name: "個人網站",
    shortDescription: "運用 Web 前端技術打造的個人作品集展示平台。",
    techStack: ["HTML", "CSS", "JS"],
    status: "In Progress"
  }
];

const skills = {
  Law: ["法律研究", "邏輯論證", "政策分析"],
  Digital: ["Excel", "JavaScript", "AI工具應用"],
  Design: ["視覺呈現", "基礎畫畫"]
};

// 2. Rendering Logic
const renderData = () => {
    // Render Courses
    const coursesContainer = document.getElementById("courses-container");
    courses.forEach(course => {
        const div = document.createElement("div");
        div.className = "course-card";
        div.innerHTML = `
            <div class="course-title">${course.name}</div>
            <div class="course-meta">${course.semester} • ${course.category}</div>
            <p style="font-size: 0.9rem; margin-bottom:15px; color: #cbd5e1;">${course.description}</p>
            <div class="skill-list">${course.skills.map(s => `<span style="font-size: 0.75rem; border: 1px solid rgba(56,189,248,0.3); padding: 2px 8px; border-radius: 10px; margin-right: 5px;">${s}</span>`).join("")}</div>
        `;
        coursesContainer.appendChild(div);
    });

    // Render Projects
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project-card";
        div.innerHTML = `
            <div class="project-title">${project.name}</div>
            <div class="project-desc">${project.shortDescription}</div>
            <div class="project-tags" style="margin-top:10px; font-weight:bold; color: #38bdf8;">${project.techStack.join(" • ")}</div>
        `;
        projectsContainer.appendChild(div);
    });

    // Render Skills
    const skillsContainer = document.getElementById("skills-container");
    Object.entries(skills).forEach(([category, list]) => {
        const div = document.createElement("div");
        div.className = "skill-group";
        div.innerHTML = `
            <div class="skill-title">${category}</div>
            <div class="skill-list">${list.map(skill => `<span>${skill}</span>`).join("")}</div>
        `;
        skillsContainer.appendChild(div);
    });
};

// 3. Interactions
document.addEventListener("DOMContentLoaded", () => {
    renderData();

    // Scroll Effect for Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.style.padding = window.scrollY > 50 ? "10px 0" : "15px 0";
        navbar.style.background = window.scrollY > 50 ? "rgba(15, 23, 42, 0.95)" : "rgba(15, 23, 42, 0.8)";
    });

    // Mobile Menu Toggle
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    navToggle.addEventListener("click", () => navMenu.classList.toggle("active"));
});
