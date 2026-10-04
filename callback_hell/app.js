

let h1 =document.querySelector("h1")

function change_innerText(Text,delay,nextinnertext){
    setInterval(()=>{
        h1.innerText= Text;
        if(nextinnertext)nextinnertext();

    },delay);

}
// we can use setTiomeout or setInterval async ;

function change_color(color,delay,nextColorChange){
    setInterval(()=>{
        h1.style.color= color;
        if(nextColorChange)nextColorChange();
    },delay);
}

change_color("red",1000,()=>{
    change_color("Blue",2000,()=>{
        change_color("green",3000,()=>{
            change_color("orange",4000,);
        });
    });
});

change_innerText("CAMBRIDE",2000,()=>{
    change_innerText("Rauhan",4000,()=>{
        change_innerText("Aditya",6000,()=>{
            change_innerText("Rudresh",8000);
        });
    });
});