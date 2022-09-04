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
                <a onclick="loadCategoryDetail('${category_id}')" class="navbar-brand text-muted fs-5 fw-" href="#">${category_name}</a>
            </div>
        </nav>
          `;
    categoryContainer.appendChild(categoryDiv);
  });
};

const loadCategoryDetail = id => {
  // https://openapi.programming-hero.com/api/news/category/01
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  //   console.log("Love", id);
  fetch(url)
    .then(res => res.json())
    .then(data => displaySelectedCategory(data.data[0]));
  //   console.log(url);
};

const displaySelectedCategory = select => {
  const catagoryContainer = document.getElementById("catagory-container");
  catagoryContainer.innerHTML = `
  
    `;

  console.log(select);
};

loadMainApi();
