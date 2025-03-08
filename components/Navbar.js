//two navbars
export function renderNavbar1(data) {
    const nav = document.querySelector("nav");
    nav.innerHTML = `   
      <div class="dropdown">
        <div class="dropdown-button"><i class="fa-solid fa-bars"></i> Menu</div>
        <div class="nav-elements">
          <a class="nav-links" href="index.html">Home</a>
          <a class="nav-links" href="?page=${data.pages[1].interests.id}">Personal Interests</a>
          <a
            class="nav-links"
            href="      CHANGE NAME TO RESUME          "
            >Repertoire</a
          >
        </div>
      </div>
    `;
  }
  
  export function renderNavbar2(data) {
    const nav = document.querySelector("nav");
    nav.innerHTML = `   
      <div class="dropdown">
        <div class="dropdown-button"><i class="fa-solid fa-bars"></i> Menu</div>
        <div class="nav-elements">
          <a class="nav-links" href="index.html">Home</a>
          <a class="nav-links" href="?page=${data.pages[1].interests.id}">Personal Interests</a>
          <a
            class="nav-links"
            href=""
            >Repertoire</a
          >
        </div>
      </div>
    `;
  }