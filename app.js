const crust = [{ id: 1, name: 'Stuffed Crust', price: 6, image: 'https://1.bp.blogspot.com/-JuUCKdpEgZk/YGddnXIXZFI/AAAAAAABR0k/6E9IeNXPdjQR-b0o3O8haXFsSUVTPOqsACLcBGAsYHQ/s640/pizza-hut-uk-nacho-cheese-stuffed-crust.jpg' },
{ id: 2, name: 'Flat Bread crust', price: 3, image: 'https://irepo.primecp.com/2015/07/226918/Cauliflower-Flatbread_ArticleImage-CategoryPage_ID-1073053.jpg?v=1073053' },
{ id: 3, name: 'Thick Crust', price: 6, image: 'https://s3.amazonaws.com/fleischmann-wordpress/wp-content/uploads/2020/08/20055912/Thick-Crust-Pizza.jpg' }]

const sauce = [{ id: 4, name: 'Pesto', price: 3.50, image: 'https://www.ketofocus.com/wp-content/uploads/keto-bbq-sauce-1.jpg' },
{ id: 5, name: 'BBQ', price: 4.50, image: 'https://www.thegraciouspantry.com/wp-content/uploads/2021/06/maple-bbq-sauce-recipe-v-1-.jpg' },
{ id: 6, name: 'Alfredo Sauce', price: 5, image: 'https://www.homemadeinterest.com/wp-content/uploads/2020/09/Keto-Alfredo-Sauce_IG-3.jpg' }]

const toppings = [{ id: 7, name: 'Pepperoni', price: 2.50, image: 'https://m.media-amazon.com/images/I/41sZBgYEubL.jpg' },
{ id: 8, name: 'Bacon', price: 3, image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/28/4/FNM-090111_Centerfold-005_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371599729888.jpeg' }]


const order = []

function drawCrusts() {
    let template = ''
    crust.forEach(item => {
        template +=
            ` 
        <div class="col-4 my-1 p-1 justify-content-around" onClick="addCrustCart(${item.id})">
        <img class="img-fluid " src="${item.image}" alt="">
        <h5 class= "text-center"><b>${item.name}</b></h5> 
        <p>$${item.price}</p>
    </div> `
    })
    
    document.getElementById('crust-items').innerHTML = template
}

function drawSauce() {
    let template = ''
    sauce.forEach(item => {
        template +=
            ` 
        <div class="col-4 my-1 p-1 justify-content-around"  onClick="addSauceCart(${item.id})">
        <img class="img-fluid" src="${item.image}" alt="">
        <h5 class= "text-center"><b>${item.name}</b></h5> 
        <p>$${item.price}</p>
    </div> `
    })
    document.getElementById('sauce-items').innerHTML = template
}

function drawToppings() {
    let template = ''
    toppings.forEach(item => {
        template +=
            ` 
        <div class="col-4 my-1 p-1 justify-content-around" onCLick="addToppingCart(${item.id})">
        <img class="img-fluid " src="${item.image}" alt="">
        <h5 class= "text-center"><b>${item.name}</b></h5> 
        <p>$${item.price}</p>
    </div> `
    })
    console.log(template);
    document.getElementById('topping-items').innerHTML = template
}

function drawOrder() {
    let template = ''
    let total = 0
    order.forEach(item => {
        total += item.price
        template += `<li class="d-flex justify-content-between border-bottom border-secondary">
        <p class="m-1">${item.name}</p>
        <p class="m-1">$${item.price.toFixed(2)}</p>
      </li>`

    })

    document.getElementById('total').innerText = total.toFixed
    document.getElementById('order-items').innerHTML
    document.getElementById('total-order-items').innerText = order.length.toString
}



//function to add items to cart//
function addCrustCart(id) {
    let found = crust.find(item => item.id == id)
    if (found) {
        console.log(found)
        order.push(found)
        drawOrder()
    }
    document.getElementById('checkout-button')
}

function addSauceCart(id){
    let found = sauce.find(item => item.id == id)
    if (found){
        console.log(found)
        order.push(found)
        drawOrder()
    }
    document.getElementById('checkout-button')
}

function addToppingCart(id){
    let found =toppings.find(item => item.id == id)
    if (found){
        console.log(found)
        order.push(found)
        drawOrder()
    }
    document.getElementById('checkout-button')
}




drawCrusts()
drawSauce()
drawToppings()  