let modalBtn = document.querySelectorAll('.certificadoContent');

let modal = document.querySelector('.modal')


modalBtn.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        modal.classList.add('on')
    })
})