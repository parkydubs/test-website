export function renderInterests(interest) {
    const main = document.querySelector("main");
    main.innerHTML = `
          <section class=${interest.id}>
            <h1><a href="personal-interests"></a>${interest.title}</h1>
            <div class=${interest.content}>
              <img
                src=${interest.materials.path1}
                alt=${interest.materials.label1}
              />
              <br />
              <i class="fa-solid ${interest.materials.label2}"></i>
              <a class=${interest.materials.class4} href=${interest.materials.path2}
                >YouTube - f sharp</a
              >
              <br />
              <i class="fa-solid ${interest.materials.label3}"></i>
              <a
                class=${interest.materials.class4}
                href=${interest.materials.path4}
                >${interest.materials.label4}</a
              >
              <p>
                ${interest.description}
              </p>
            </div>
          </section>
        `;
  }
  