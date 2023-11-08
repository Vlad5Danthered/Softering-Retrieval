const card = document.querySelectorAll('.comments__card');
const card1 = document.querySelector('.comments__card_1');
const card2 = document.querySelector('.comments__card_2');
const card3 = document.querySelector('.comments__card_3');
const cardOpen = document.querySelector('.comments__card_open')
let cardn1 = 1;
let cardn2 = 2;
let cardn3 = 3;

card.forEach(function(e){
    e.addEventListener("click", function(){
        let l = 3;
        for (i = 0; i < l; i++) {
            card[i].classList.remove("comments__card_open")
        }

        e.classList.add('comments__card_open')

        if(e == card1){
            cardn1 = 2;
            cardn2 = 1;
            cardn3 = 3;
        }
        else if(e == card2){
            cardn1 = 1;
            cardn2 = 2;
            cardn3 = 3;
        }
        else if(e == card3){
            cardn1 = 1;
            cardn2 = 3;
            cardn3 = 2;
        }
        console.log(cardn1,cardn2,cardn3)
        document.querySelector('.comments__card_1').style.order=cardn1;
        document.querySelector('.comments__card_2').style.order=cardn2;
        document.querySelector('.comments__card_3').style.order=cardn3;
    })
})




const carousel = document.querySelector('.logos__cards');
const arrowLeft = document.querySelector('.logos__arrow_left');
const arrowRight = document.querySelector('.logos__arrow_right');

let width = 300;
let position = -900;
let count = 3;
let listEl = document.querySelectorAll('.logos__cards > img')

arrowLeft.addEventListener("click", function(){
    position += width * count

    position = Math.min(position, 0)
    carousel.style.marginLeft=position + "px";
})
arrowRight.addEventListener("click", function(){
    position += -(width * count)

    position = Math.max(position, -width * (listEl.length - count) + 0 )
    carousel.style.marginLeft=position + "px";
})


let FormName = document.querySelector('.form__name');
let star1 = document.querySelector('.form__01');
let FormTel = document.querySelector('.form__tel');
let star2 = document.querySelector('.form__02');

FormName.onfocus = function() {
    star1.style.display='block'
  };
FormName.onblur = function() {
    star1.style.display='none'
};
FormTel.onfocus = function() {
    star2.style.display='block'
  };
FormTel.onblur = function() {
    star2.style.display='none'
};



let FormSend = document.querySelector('.form__send');
let FormCheckbox = document.querySelector('.form__checkbox');

FormCheckbox.addEventListener("click", function(){
    if(FormCheckbox.checked){
        FormSend.removeAttribute("disabled", "disabled");
    }
    else{
        FormSend.setAttribute("disabled", "disabled");
    }
})

