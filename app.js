//Shopping lists
const inputTag = document.getElementsByClassName("form-control")[0]; //HTML Collection
const shoppingListTag = document.getElementsByClassName("shoppingListConatiner")[0];

let productID = 1;
const handleChange = (event) => {
    const inputValue = event.target.value;

    const productContainer = document.createElement("div");
    productContainer.classList.add("productContainer");

    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productName");
    parentDiv.addEventListener("click", () =>{
        const classExit = parentDiv.classList.contains("purchased");
        if(classExit) {
            parentDiv.classList.remove("purchased");
        } else{
            parentDiv.classList.add("purchased");
        }
        
    });
   // <i class="far fa-trash-alt"></i>
   const spanTag = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("far","fa-trash-alt");
    trashIcon.addEventListener("click", () => {
        productContainer.remove();
        alert(inputValue.toCapitalize() + " is successfully removed from the list");
    })

   spanTag.id = productID;
   const product = productID.toString()+" . " + inputValue;

   spanTag.append(product);
   parentDiv.append(spanTag);
   productContainer.append(parentDiv, trashIcon);
   shoppingListTag.append(productContainer);

   inputTag.value = "";
   productID += 1;
}
inputTag.addEventListener("change", handleChange);