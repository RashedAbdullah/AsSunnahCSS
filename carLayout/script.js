const menu = document.querySelector(`.open`);
const close = document.querySelector(`.close`);
// close.classList.add("displayNone");


function addAndRemove(){
    menu.classList.add("displayNone");
    close.classList.remove("displayNone")
}

menu.addEventListener(`click`,()=>{
    addAndRemove();
});