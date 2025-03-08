//project details(individual pages)
export function renderProjectDetails(project) {
    const main = document.querySelector("main");
    main.innerHTML = `
      <main class="project-${project.id}">
        <section class="box-header">
          <h1>${project.title}</h1>
        </section>
        <section class="box-description">
          <div class="photo">
            <img src=${project.materials.path1} alt=${project.materials.alt1} />
          </div>
          <div class="overview">
            <p><i class="fa-solid ${project.materials.label2}"></i>${project.description1}</p>
          </div>
        </section>
      </main>
    `;
  }