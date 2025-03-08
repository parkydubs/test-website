//index.js
import { renderNavbar1 } from './components/Navbar.js';
import { renderNavbar2 } from './components/Navbar.js';
import { renderMainPage } from './components/MainPage.js';
import { renderProjectDetails } from './components/ProjectDetails.js';
import { renderInterests } from './components/Interests.js';
import { loadCSS } from './components/CSSLoader.js';


fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get("page");
    const page = pageId == null ? "main" : "page-detail";

    if (page === "main") {
      loadCSS("home");
      renderNavbar1(data);
      renderMainPage(data);
    } else {
      renderNavbar2(data);
      if (pageId == "page1") {
        const p = data.pages[0].projects.find((p) => p.id == pageId);
        loadCSS("music");
        renderProjectDetails(p);
      } else if (pageId == "page2") {
        const p = data.pages[0].projects.find((p) => p.id == pageId);
        loadCSS("recipe");
        renderProjectDetails(p);
      } else if (pageId == "page3") {
        loadCSS("interests");
        renderInterests(data.pages[1].interests);
      }
    }
  });