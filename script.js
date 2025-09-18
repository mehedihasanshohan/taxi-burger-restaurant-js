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
    const btn = document.createElement('button');
    btn.innerText = category.categoryName;

    btn.style.margin = "5px";
    btn.style.padding = "8px 12px";
    btn.style.border = "1px solid gray";
    btn.style.borderRadius = "6px";

    categoryContainer.appendChild(btn);

  })

}

loadCategory();