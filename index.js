var productName= document.getElementById("productName");
var productPrice= document.getElementById("productPrice");
var productCat= document.getElementById("productCat");
var productDesc= document.getElementById("productDesc");
var mainBtn= document.getElementById("mainBtn");
var updateBtn= document.getElementById("updateBtn");
var currentindex=0;

var productList ;
if (localStorage.getItem("productList") == null) {
    productList = []
} else {
    productList = JSON.parse(localStorage.getItem("productList"))
    displayProduct(productList)
}


function addProduct(){
    if(mainBtn.innerHTML=="updateBtn"){
        updateProduct(currentindex);


    }else{
        var product ={
            name :productName.value,
            price :productPrice.value,
            cat :productCat.value,
            desc :productDesc.value
    
        }
        productList.push(product)
        localStorage.setItem("list",JSON.stringify(productList))
        displayProduct();
        clearform();
    }

}
function displayProduct(){
    var cartona =``;
    for( var i=0;i<productList.length;i++){
        cartona += ` <tr>
        <td>${i}</td>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].cat}</td>
        <td>${productList[i].desc}</td>
        <td>
            <button class="btn btn-warning" onclick="retriveProductData(${i})">Update</button>
        </td>
        <td>
            <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
        </td>

    </tr>`;

    }
    document.getElementById("productData").innerHTML=cartona;
}
function clearform(){
    productName.value="";
    productCat.value="";
    productDesc.value="";
    productPrice.value=""
}
function deleteProduct(index){
    productList.splice(index,1);
    displayProduct(productList);

}
function retriveProductData(index){
    currentindex=index;
    productName.value =productList[index].name;
    productPrice.value =productList[index].price;
    productDesc.value =productList[index].desc;
    productCat.value=productList[index].cat;
    mainBtn.innerHTML = 'update product';

}



function updateProduct(){
    var product ={
        name :productName.value,
        price :productPrice.value,
        cat :productCat.value,
        desc :productDesc.value

    }
    productList[currentindex]=product;
    mainBtn.innerHTML = 'add product';


}

    

function validateProductName() {
  

    if (productName.value == "") {

    return false;
    } else {
        document.getElementById("name-validation").classList.replace("d-none","d-block")
     return false
    }
}