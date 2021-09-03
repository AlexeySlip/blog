let btnSendMessage = document.querySelector(".btn-send")
let modal = document.querySelector(".modal")
let btnClose = document.querySelector(".btn-close")
console.log(btnSendMessage)
console.log(modal)
console.log(btnClose)

btnSendMessage.addEventListener("click",openModal);

btnClose.addEventListener("click",closeModal);

function openModal(){
    modal.classList.remove("hide");
    modal.classList.add("show");
    }

function closeModal(){
    modal.classList.remove("show");
    modal.classList.add("hide");
    }
modal.addEventListener("click", function(e){
    if (e.target === modal) {
    closeModal()
    }})