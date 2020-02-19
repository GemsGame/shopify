const host = 'dev-mode.myshopify.com';


document.addEventListener("click", event => {
    

    if(event.target.id === "first_product_box") {
        this.goodsCreater(event.target.dataset.productId);
        document.getElementById("first_product_box").style="display:none;";
        document.getElementById("first_product_box-del").style="display:inline-block;";
    }

    if(event.target.id === "first_product_box-del") {
        this.goodsDelete(event.target.dataset.productId);
        document.getElementById("first_product_box-del").style="display:none;";
        document.getElementById("first_product_box").style="display:inline-block;";
    }
})


getCart = () => {
    fetch(`https://${host}/cart.js`)
    .then(result => result.json()).then(data => console.log(data))
    .catch(error => console.log(error));
}

sendToCart = (items) => {
    fetch(`https://${host}/cart/add.js`, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json;charset=utf-8'
       },
       body: JSON.stringify(items)
    }).then(result => result.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
}

changeGoodsQuantity = (items) => {

    fetch(`https://${host}/cart/change.js`, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(items)
     }).then(result => result.json())
       .then(data => console.log(data))
       .catch(error => console.log(error))
}

goodsDelete= (id) => {
    const items = {
        id: id,
        quantity: 0,
    }
    this.changeGoodsQuantity(items);
}

goodsCreater = (id) => {
    const items = {
        id: id,
        quantity: 1,
    }
    this.sendToCart(items);
}
