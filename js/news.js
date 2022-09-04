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
   
    <nav class="navbar">
         <div class="container-fluid">
            <a class="navbar-brand text-muted fs-5 fw-semibold" href="#">${category_name}</a>
        </div>
    </nav>
      `;
    categoryContainer.appendChild(categoryDiv);
  });
};

loadMainApi();
