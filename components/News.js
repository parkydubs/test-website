// CONSIDER REMOVING THIS, so comment it out in data.json too
export function renderNews(news) {
    return `
      <section class="news">
        <h1>News</h1>
        <div class="searchnews">
          <input type="search" name='news' placeholder="Search News...">
        </div>
        <table class="newslist">
          ${news.map(renderNewsItems).join("")}
        </table>
      </section>
    `;
  }
  
  export function renderNewsItems(newsItem) {
    return `
      <tr>
        <td>${newsItem.date} - ${newsItem.title}</td>
      </tr>
    `;
  }