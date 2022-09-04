const loadNewsContainer = async () => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`;
  const res = await fetch(url);
  const data = await res.json();
  displayNewsContainer(data.data);
};

const displayNewsContainer = news => {
  console.log(news);
  const newsContainer = document.getElementById("news-container");
  news.forEach(news => {
    const loadNewsDiv = document.createElement("div");
    loadNewsDiv.classList.add("row");
    loadNewsDiv.innerHTML = `
    
  <div class="row news-item my-3 rounded-3 bg-white p-4 border mb-5">
  <div class="col-md-3 d-flex justify-content-center  ">
    <img src="${news.thumbnail_url}" class="img-fluid mx-auto rounded-start" />
  </div>
  <div class="col-md-9">
    <div class="card-body ">
      <h3 class="card-title fw-bold my-3">${news.title}</h3>
      <p class="card-text my-4">
        ${
          news.details.length > 100
            ? news.details.slice(0, 300) + "..."
            : news.details
        }
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>     
  </div>
      `;
    newsContainer.appendChild(loadNewsDiv);
  });
};

loadNewsContainer();
