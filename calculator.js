var a = document.getElementsByTagName("input");
var b = document.getElementsByTagName("button");
for(items of button){
    items.addEventListner('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
    })
}