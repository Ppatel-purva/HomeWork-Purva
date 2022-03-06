function submitContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    console.log(name);
    console.log(email);
    console.log(phone);
}
addToCartAnchors = document.getElementsByClassName("add-to-cart")
for(let i=0; i<addToCartAnchors.length; i++) {
    addToCartAnchors[i].addEventListener("click", incrementCounter);

}
    
    
let counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById("addcart").innerHTML = "View Cart("+ counter +")";
}