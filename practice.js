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
    meals.forEach(meal=>{
      console.log(meal);
      const myDiv = document.createElement('div')
      myDiv.classList.add('col');
      myDiv.innerHTML=`
      <div class="card-body">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <h3 class="card-title">${meal.strMeal}</h3>
     <p class="card-text">${meal.strInstructions}</p>
     </div>
      `
      searchBox.appendChild(myDiv);
      
    });
  }