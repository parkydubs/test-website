//projects
export function renderProjects(projects) {
    return `
      <section class="projects" id="projects">
        <h1>Projects</h1>
        <div class="searchprojects">
          <input type="search" name='projects' placeholder="Search Projects...">
        </div>
        <div class="projectlist">
          ${projects.map((p) => renderProjectPage(p)).join("")}
        </div>
      </section>
    `;
  }
  
  export function renderProjectPage(project) {
    return `
      <h2><a href="?page=${project.id}">${project.title}</a></h2>
      <ul class="bullets">
        <li><p><strong>Overview:</strong> ${project.description1}</p></li>
        <li><p><strong>Focus:</strong> ${project.description2}</p></li>
        <li><p><strong>Plans:</strong> ${project.description3}</p></li>
      </ul>
    `;
  }