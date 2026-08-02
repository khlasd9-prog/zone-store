function addProduct(){

    let name = document.getElementById("gameName").value;
    let price = document.getElementById("gamePrice").value;
    let image = document.getElementById("gameImage").value;


    let products = JSON.parse(localStorage.getItem("products")) || [];


    products.push({
        name: name,
        price: price,
        image: image
    });


    localStorage.setItem("products", JSON.stringify(products));


    alert("تم إضافة اللعبة بنجاح");


    showProducts();

}


function showProducts(){

    let box = document.getElementById("products");

    if(!box) return;


    let products = JSON.parse(localStorage.getItem("products")) || [];


    box.innerHTML = "";


    products.forEach(function(product){

        box.innerHTML += `
        <div class="box">
            <h3>${product.name}</h3>
            <p>السعر: ${product.price}</p>
            <img src="${product.image}" width="150">
        </div>
        `;

    });

}


function showProducts(){

    let box = document.getElementById("products");

    if(!box) return;

    let products = JSON.parse(localStorage.getItem("products")) || [];

    box.innerHTML = "";


    products.forEach(function(product, index){

        box.innerHTML += `

        <div class="box">

            <h3>${product.name}</h3>

            <p>السعر: ${product.price}</p>

            <img src="${product.image}" width="150">

            <br>

            <button onclick="deleteProduct(${index})">
                حذف
            </button>

        </div>

        `;

    });

}
function deleteProduct(index){

    let products = JSON.parse(localStorage.getItem("products")) || [];

    products.splice(index, 1);

    localStorage.setItem("products", JSON.stringify(products));

    showProducts();

    alert("تم حذف المنتج");
}