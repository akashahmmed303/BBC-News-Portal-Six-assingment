const loadMainApi = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMainCategory(data.data.news_category));
};
const displayMainCategory = category => {
  // console.log(category);
  const categoryContainer = document.getElementById("catagory-container");

  const noNews = document.getElementById("no-found-message");
  if (category.length === 0) {
    noNews.classList.remove("d-none");
  } else {
    noNews.classList.add("d-none");
  }
  category.forEach(singleCategory => {
    // console.log(singleCategory);
    const { category_name, category_id } = singleCategory;
    const categoryDiv = document.createElement("nav");
    categoryDiv.classList.add("navbar");
    categoryDiv.innerHTML = `
       
        <nav class="navbar">
             <div class="container-fluid">
                <a onclick="loadCategoryDetail('${category_id}')" class="navbar-brand text-muted fs-5 fw-" href="#">${category_name}</a>
            </div>
        </nav>
          `;
    categoryContainer.appendChild(categoryDiv);
  });
};

const loadCategoryDetail = newsContainerText => {
  // https://openapi.programming-hero.com/api/news/category/01
  const url = `https://openapi.programming-hero.com/api/news/category/${newsContainerText}`;
  //   console.log("Love", id);
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data[0]));
  //   console.log(url);
};
document
  .getElementById("catagory-container")
  .addEventListener("click", function () {
    const newsContainer = document.getElementById("news-container");
    const newsContainerText = newsContainer.innerText;

    // loadMainApi();
  });

const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classLista.add("d-none");
  }
};

loadMainApi();
