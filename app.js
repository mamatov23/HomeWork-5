 const detail=document.querySelector('.detail')

const url='https://www.themealdb.com/api/json/v1/1/search.php?s='

const letterUrl='https://www.themealdb.com/api/json/v1/1/search.php?f='

const urlb='https://www.themealdb.com/api/json/v1/1/search.php?f=b'
const idUrl='https://www.themealdb.com/api/json/v1/1/lookup.php?i='

function getMeals(aty) {
    fetch (url+aty)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals);
            renderMeals(data.meals)
        })
}

input.onchange=()=>{
    getMeals(input.value)
}

function renderMeals(arr) {
    root.innerHTML=""
    for (const obj of arr) {
        root.innerHTML+=`
        <li>
        <h5>${obj.strMeal}</h5>
        <img width="30%" src='${obj.strMealThumb}' />
        </li>`
    }
}



btns.forEach(btn=>{
    btn.onclick=()=>{
        console.log(letterUrl+btn.innerText);

        fetch(letterUrl+btn.innerText)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals);
            renderMeals(data.meals)
        })
    }
    
})  



function getMeal(id) {
    console.log(id);
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' +id)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.meals);
       
    })
}

 //.

function getMeals(){
    fetch(urlb)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.meals);
        renderMeals(data.meals.slice(0,3))
        
    })
    
}

function getOneMeal(id) {
    fetch(idUrl+id)
    .then(res=>res.json())
    .then(data=>{           
        console.log(data.meals[0]);
          showOneMeal(data.meals[0])
})

}


function renderMeals(arr){
    roott.innerHTML=''
    for (const obj of arr) {
        roott.innerHTML+=`
        <div class="card" style="width: 18rem;" onclick='getOneMeal(${obj.idMeal})'>
            <img src="${obj.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${obj.strMeal}</p>
            </div>
         </div>
        `
        
    }
}
getMeals()

function showOneMeal(obj) {
     let ingredientList=""
    for (i=0;i<21; i++){
        const ingredient=obj['strIngredient' + i]
        if (ingredient) {
            ingredientList+=
            `<li>${ingredient}</li>
            <img src='https://www.themealdb.com/images/ingredients/${ingredient}-Small.png' />
            
            `
            
        }
    }

    roott.innerHTML=''     
    detail.innerHTML=`
    <div>
        <div>
            <h1>${obj.strMeal} </h1>
            <img src='${obj.strMealThumb}' />
            <ol>${ingredientList} </ol>
          
        </div>
    </div>
    `
 const categories=document.getElementById('categories')
const products=document.getElementById('products')
const cartCount=document.getElementById('cartCount')

// const url='https://api.escuelajs.co/api/v1/products'
 const url='https://fakestoreapi.com/products/'

async function getProducts (){
    const res= await fetch(url)
    const data= await res.json()
      console.log(data);
      showCategories(data)
      showProducts(data)
     
   
}

getProducts()

function showCategories(arr) {
  let newCategories=[]

  const categoriesFilter=arr.filter(el=>{
   console.log(el);
   if(el.category.name && !newCategories.includes(el.category.name) ){
     newCategories.push(el.category.name)
   }
  })

  console.log(newCategories);
  
    for (const name of newCategories ) {
      categories.innerHTML+=<li>${name}</li>
      // console.log(obj.category.name);
 
  } 
}




function showProducts(arr) {
  products.innerHTML=''
  for (const product of arr) {
    products.innerHTML+=`
    <div onclick='getItemBuld (${product.id})' class="card d-flex" style="width: 18rem; ">
    <img src="${product.image} " alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${product.title}</h5>
      <p class="card-text">${product.category}</p>
     <h6>${product.price}$</h6>
    </div>
  </div>



     ` 
}    
}

async function getItemBuld (id){
    const response=await fetch(url+id)
    const data=await response.json()
      console.log(data);
      showOneCard(data)
    //   renderAddCard(data)
}

// getItemBuld(2)

 function showOneCard(obj) {
    products.innerHTML=''
    products.innerHTML+=`
    <div class="card d-flex" style="width: 22rem; ">
    <img src="${obj.image} " alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${obj.title}</h5>
      <p class="card-text">${obj.despriction}</p>
      <h4>${obj.price}$</h4>
      <a href="#" onclick='addItemToCart(${obj.id})' class="btn btn-primary">Добавить в корзину</a>
    </div>
  </div>
     ` 
}

// function renderAddCard(id){
//     getItemBuld(id)
//     localStorage.setItem()
//     console.log(id);

// //     let cartAmount=0
// //    ++cartAmount
// //     cartCount.innerHTML=cartAmount


// }

// let arrCart=[]

// async function addItemToCart(id){


  
//     const response=await fetch(url+id)
//     const data=await response.json()
//       console.log(data);
//       arrCart.push(data)
      
//      const cartData=JSON.stringify(arrCart)
//     localStorage.setItem('cart', cartData)
//     getItemFromCard()
// }

// function getItemFromCard() {
//     const data=JSON.parse(localStorage.getItem('cart'))
//     console.log(data, 'localStorage');
//     arrCart=data
// }

// getItemFromCard()

