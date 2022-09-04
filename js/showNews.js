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
      <div class="row d-flex">
        <div class="col-lg-4 d-flex"> <img class="w-25 rounded-circle me-3" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80" alt>
            <div>
                <h6>${news.author.name}</h6>
                <p>${news.author.published_date} </p>
            </div>
        </div>
        <div class="col-lg-3 d-flex">
            <h5 class=" me-1 class= &quot;py-2&quot;"><i class="fa-regular fa-eye"></i></h5>
            <h5>${news.total_view} M</h5>
        </div>
        <div class="col-lg-3 d-flex">
                    <h5><i class="fa-solid fa-star"></i></h5>
                    <h5><i class="fa-solid fa-star"></i></h5>
                    <h5><i class="fa-solid fa-star"></i></h5>
                    <h5><i class="fa-regular fa-star"></i></h5>
                    <h5><i class="fa-regular fa-star"></i></h5>
        
        </div>
        <div class="col-lg-2">
                <button type="button" onclick="viewClickDetails('11468ed61aee84de492a8b04158a22f0')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 Show Details</button>
        </div>
      </div>
    </div>
  </div>     
  </div>
      `;
    newsContainer.appendChild(loadNewsDiv);
  });
};

loadNewsContainer();
