const loadMainApi = () => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayMainCategory(data.data.news_category));
};
const displayMainCategory = category => {
  // console.log(category);
  const categoryContainer = document.getElementById("catagory-container");

  category.forEach(singleCategory => {
    // console.log(singleCategory);
    const { category_name, category_id } = singleCategory;
    const categoryDiv = document.createElement("nav");
    categoryDiv.classList.add("navbar");
    categoryDiv.innerHTML = `
    <div class="collapse navbar-collapse d-block" id="navbarNavDropdown ">
        <ul class="navbar-nav">
             <li class="nav-item container-fluid">
                <a onclick="loadCategoryDetail('${category_id}')" class="navbar-brand text-muted fs-5 fw-bold" href="#">${category_name}</a>
            </li>
        </ul>
        </div>
          `;
    categoryContainer.appendChild(categoryDiv);
  });
};

const loadCategoryDetail = newsContainerText => {
  const url = `https://openapi.programming-hero.com/api/news/category/${newsContainerText}`;
  // console.log("Love", newsContainerText);
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.data[0]));
  // console.log(url);
};
document
  .getElementById("catagory-container")
  .addEventListener("click", function (go) {
    const newsContainer = document.getElementById("news-container");
    // newsContainer.innerText = ;

    // loadMainApi();
  });

loadMainApi();
