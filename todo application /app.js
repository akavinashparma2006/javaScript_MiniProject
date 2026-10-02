let btn =document.querySelector("button");
let ul =document.querySelector("ul");
let inp =document.querySelector("input");

btn.addEventListener("click", function(){
    let item =document.createElement("li");
    item.innerText=inp.value;

    let delBtn =document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    
    ul.appendChild(item);

    input.valur="";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let ListItem =event.target.parentElement;
        console.log(ListItem)
        ListItem.remove();
    }
    console.log(event.target);
    console.log("button clicked");

});





// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par =this.parentElement;
//         par.remove();
//     });
// }