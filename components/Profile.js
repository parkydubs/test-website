//profile
export function renderProfile(profile) {
    return `
          <section class="portfolio">
            <section class="box-bio">
              <img
                class="profile-photo"
                src=${profile.photo}
                alt="Parker's Profile Picture"
              />
              <h1>${profile.name}</h1>
              <div>
                <p>
                  <i
                    >${profile.description}</i
                  >
                </p>
              </div>
            </section>
            <section class="contact">
              <p>
                <a href="https://www.bc.edu/bc-web/schools/morrissey.html"
                  >${profile.department}</a
                >
                <br />
                <a href="https://www.bc.edu/">${profile.university}</a>
                <br />
                ${profile.address}
                <br />
                <br />
                <i class="fa-solid fa-phone-volume"></i>
                Phone:
                <a href="tel:+16507997130">${profile.phone}</a>
                <br />
                <i class="fa-solid fa-envelope"></i>
                Email:
                <a href="mailto:${profile.email}">${profile.email}</a>
                <br />
                <i class="fa-brands fa-linkedin"></i>
                LinkedIn:
                <a href="https://www.linkedin.com/in/${profile.linkedin}/">${profile.linkedin}</a>
                <br />
                <i class="fa-brands fa-github"></i>
                GitHub:
                <a href="https://github.com/${profile.github}">${profile.github}</a>
              </p>
            </section>
          </section>
        `;
  }
  