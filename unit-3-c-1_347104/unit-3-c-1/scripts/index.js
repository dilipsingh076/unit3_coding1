//store the products array in localstorage as "products"
document.querySelector("form").addEventListener("submit",sendtolocal)

document.querySelector("#show_products").addEventListener("click",anotherpage)


var product_data = JSON.parse(localStorage.getItem("product")) || []


function sendtolocal(){
    event.preventDefault();

    var userObj = {
        type:document.getElementById("type").value, 
        descripation:document.getElementById("desc").value, 
        price:document.getElementById("price").value, 
        Image:document.getElementById("image").value, 
    };


    product_data.push(userObj);

    localStorage.setItem("product",JSON.stringify(product_data));

}

function anotherpage(){
    window.location.href = "./inventory.html"
}