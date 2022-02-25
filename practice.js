const searchFood = ()=>{
    const input = document.getElementById('input-food');
    const mine = input.value;
    input.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mine}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data.meals));
  
  }
  
  const display = meals =>{
    const searchBox = document.getElementById('search');
    searchBox.innerHTML = '';
    meals.forEach(meal=>{
      // console.log(meal);
      const myDiv = document.createElement('div')
      myDiv.classList.add('col');
      myDiv.innerHTML=`
      <div class="card-body" onclick="loadDetails(${meal.idMeal})">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <h3 class="card-title">${meal.strMeal}</h3>
     <p class="card-text">${meal.strInstructions}</p>
     </div>
      `
      searchBox.appendChild(myDiv);
      
    });
  }

  const loadDetails = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>myMeal(data.meals[0]));
  }

  const myMeal = meal=>{
    const myDiv = document.getElementById('meal-detail');
    myDiv.innerHTML = '';
   const div = document.createElement('div');
   div.classList.add('card')
   div.innerHTML = `
   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body">
     <h2 class="card-title">${meal.strMeal}</h2>
     <p class="card-text">${meal.strInstructions}</p>
     <a href="${meal.strYoutube}" class="btn btn-primary">Go There</a>
   </div>
   `;
   myDiv.appendChild(div);
  }