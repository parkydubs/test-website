//main page
import { renderProfile } from "./Profile.js";
import { renderNews, renderNewsItems } from "./News.js";
import { renderProjects } from "./Projects.js";
import { renderProjectPage } from "./Projects.js";

export function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = renderProfile(data.profile);
  main.innerHTML += renderNews(data.news);
  main.innerHTML += renderProjects(data.pages[0].projects);

  const searchNews = document.querySelector(".searchnews");
  const searchProjects = document.querySelector(".searchprojects");

  console.log(searchNews);
  searchNews.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = data.news.filter(
      (newsitem) =>
        newsitem.title.toLowerCase().includes(value) ||
        newsitem.date.toLowerCase().includes(value)
    );
    // console.log(filtered);
    const newsList = document.querySelector(".newslist");
    // console.log(newsList);
    newsList.innerHTML = filtered
      .map((newsitem) => renderNewsItems(newsitem))
      .join("");
  });
  searchProjects.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filteredProjects = data.pages[0].projects.filter(
      (project) =>
        project.title.toLowerCase().includes(value) ||
        project.description1.toLowerCase().includes(value) ||
        project.description2.toLowerCase().includes(value) ||
        project.description3.toLowerCase().includes(value)
    );
    const projectList = document.querySelector(".projectlist");
    projectList.innerHTML = filteredProjects
      .map((project) => renderProjectPage(project))
      .join("");
  });
}
