const url = 'https://taxi-kitchen-api.vercel.app/api/v1/categories';
const loadCategory = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => displayCategory(data.categories))
  .catch(err => console.error('Error fetching categories:', err));
}

const displayCategory = (categories) => {
  // console.log(categories);

  const categoryContainer = document.getElementById('category-container');
  categoryContainer.innerHTML = '';

  categories.map(category => {
    const categoryCard = document.createElement('div');
    categoryCard.innerHTML = `
      <button class="btn btn-block shadow btn-category">
        <img
          src=${category.categoryImg}
          alt=""
          class="w-10"
        />${category.categoryName}
      </button>
    `;
    categoryContainer.appendChild(categoryCard);


  })

}

loadCategory();