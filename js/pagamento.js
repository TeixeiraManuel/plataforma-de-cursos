let img = document.querySelector('.img-troca')
let btn = document.querySelector('.click');
let condicional = 0;
let content = document.querySelector('.content');
let box = document.querySelector('.box');
let type_pagamento_express = document.querySelector('.pagamento-type-express')
let type_pagamento_other = document.querySelector('.pagamento-type-other')
btn.addEventListener('click',()=>{
   if(condicional==0){
      img.src = '../assets/icon/Icon-arrow-down.png'
      box.classList.remove('on')
      content.classList.add('on')
      condicional=1;
   }else{
      img.src='../assets/icon/arrow-down.png'
      content.classList.remove('on')
      box.classList.add('on')
      condicional=0;

   }
})

type_pagamento_express.addEventListener('click',()=>{
   type_pagamento_other.classList.remove('active')
   type_pagamento_express.classList.add('active')
})
type_pagamento_other.addEventListener('click',()=>{
   type_pagamento_express.classList.remove('active')
   type_pagamento_other.classList.add('active')
   
})