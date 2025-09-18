const url = 'https://taxi-kitchen-api.vercel.app/api/v1/categories';
const loadCategory = () => {
  fetch(url)
  .then(res => res.json())
  .then(data => displayCategory(data.categories))
  .catch(err => console.error('Error fetching categories:', err));
}

const loadFoods = (id) => {
  // console.log(id);
  const url = ` https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayFoods(data.foods))
}

const displayFoods = (foods) => {
  // console.log(foods);
  const foodContainer = document.getElementById('food-container');
  foodContainer.innerHTML = '';

  foods.forEach((food) => {
    const foodCard = document.createElement('div');

    foodCard.innerHTML = `
    <div class="p-5 bg-white flex gap-3 mt-5 shadow rounded-xl">
            <div class="img flex-1">
              <img
                src=${food.foodImg}
                alt=""
                class="w-[160px] rounded-xl h-[160px] object-cover"
              />
            </div>
            <div class="flex-2">
              <h1 class="text-xl font-bold">
                ${food.title}
              </h1>

              <div class="badge badge-warning">${food.category}</div>

              <div class="divider divider-end">
                <h2 class="text-yellow-600 font-semibold">
                  $ <span class="price">${food.price}</span> BDT
                </h2>
              </div>

              <button class="btn btn-warning">
                <i class="fa-solid fa-square-plus"></i>
                Add This Item
              </button>
            </div>
          </div>`;

    foodContainer.appendChild(foodCard);
  })


}

const displayCategory = (categories) => {
  // console.log(categories);

  const categoryContainer = document.getElementById('category-container');
  categoryContainer.innerHTML = '';

  categories.map(category => {
    const categoryCard = document.createElement('div');
    categoryCard.innerHTML = `
      <button onClick="loadFoods(${category.id})" class="btn btn-block shadow btn-category">
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