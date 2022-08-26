//======================= Fetch API ====================================

let btn = document.querySelector("#btn");
let para = document.querySelector("#para")

btn.addEventListener("click",()=>{
    console.log("Button clicked");
    fetch("data.txt").then(res=> {
        if(!res.ok){
            throw Error(res.statusText);
        }
        return res.text()}).then(data=>{
        para.innerHTML = data;
    }).catch(error=>console.log(error))
})