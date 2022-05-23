var product_data = JSON.parse(localStorage.getItem("product"))
console.log(product_data)


var input = document.querySelector("#all_products")

for(var i =0;i<product_data.length;i++){

    var div1 = document.createElement("div")
    div1.setAttribute("class","container")
    input.append(div1)

    var img = document.createElement("img")
    img.setAttribute("id","pic")
    img.src = product_data[i].Image

    var type = document.createElement("h3")
    type.setAttribute("id",type)
    type.innerText = product_data[i].type



    var desc = document.createElement("h3")
    desc.setAttribute("id","desc")
    desc.innerText = product_data[i].descripation


    var price = document.createElement("h3")
    price.setAttribute("id","price")
    price.innerText = product_data[i].price


    var button = document.createElement("button")
    button.setAttribute("id","del")

    button.innerText = "Delete"
    button.addEventListener("click",delete_button)
    


    div1.append(img,type,desc,price,button);
    input.append(div1)

    
}

document.querySelector("#add_more_product").addEventListener("click",homepage)

function homepage(){
    window.location.href = "./index.html"
}
function delete_button(){
    event.target.parentNode.remove();
  }
