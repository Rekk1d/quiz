const headerBurger = document.querySelector('.header__burger'),
      headerMenu = document.querySelector('.header__menu'),
      body = document.getElementsByTagName('body')[0];

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('header__burger_active')
    headerMenu.classList.toggle('header__menu_active')
    body.classList.toggle('hide-scroll')
    
})

$('#feedback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.button-prev'),
    nextArrow: $('.button-next'),
})


const buttons = document.querySelectorAll('.trigger-form'),
      form = document.querySelector('.form'),
      formClose = document.querySelector('.form__close'),
      formItems = document.querySelectorAll('.form__item'),
      btnNext = document.querySelectorAll('.form__item-btn'),
      btnPrev = document.querySelectorAll('.btn-prev');
let count = 0;
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        
        form.classList.add('form-active')
        body.classList.add('hide-scroll')
        
        showFirstFormItem(index, count)
        count++;
    })
})

let index = 0;
formClose.addEventListener('click', () => {
    form.classList.remove('form-active')
    body.classList.remove('hide-scroll')
    formItems.forEach(item => {
        if(item.classList.contains('form__item-active')) {
            index = item.id;
        }
        item.classList.remove('form__item-active')
        item.classList.add('form__item-non-active')
       
    })
})



function showFirstFormItem (index, count) {
    formItems.forEach((item, i) => {
        if(index == item.id && count !== 0) {
            item.classList.remove('form__item-non-active')
            item.classList.add('form__item-active')
        }
        else if(index == '0' && item.id == "0"){
            item.classList.add('form__item-active')
        }
        else {
            item.classList.add('form__item-non-active')
        }

    })
}
//Сюда встроить логику (проверку если все норм, то классы, которые уже есть в этой функции, иначе блокировать)
function formItemActive(idx) {
    formItems.forEach((item, i) => {
        if(item.classList.contains('form__item-active')) {
            item.classList.remove('form__item-active')
            item.classList.add('form__item-non-active')
            
            
        }
        if(item.id == idx) {
            item.classList.add('form__item-active')
            item.classList.remove('form__item-non-active')
            
        }
        
})
}

var idx = 0;
var counter = 0;
btnPrev.forEach(btn => {
    btn.addEventListener('click', (e) => {
        idx-=1
        e.preventDefault()
        formItemActive(idx)
    })
})



btnNext.forEach((btn, index) => {

    btn.addEventListener('click', (e) => {
        
       
        e.preventDefault()
        
        
        if(formValidate() > 0) {
            idx+=1
            formItemActive(idx)
             
        }
    })
})


// ПОЧТИИИИИИИИИИИИИ
function formValidate() {
    var arr = [];
    const formItemi = document.querySelectorAll('.form__item');
    formItemi.forEach(item => {
        let formInputi = item.querySelectorAll('.form__input-hidden[type=checkbox]');
        if(item.classList.contains('form__item-active')){
            console.log('active slide');
            let inputsLength = formInputi.length;
            formInputi.forEach(input => {
                
                input.addEventListener('click', (e) => {
                    e.stopPropagation()
                })

                // let arr = [];
                // arr.push(input)

                // if(input.checked) {
                //     arr.push(input)
                //     counter = counter + 1;
                // }

                
                if(input.checked) {
                    counter = counter + 1
                    console.log('checked');
                    
                }
                 
                else if(!input.checked) {
                    
                    arr.push(input)
                    if(arr.length == inputsLength) {
                        counter = 0;
                        console.log('not checked');
                    }
                    
                    
                    console.log(input);
                }
                
               
            
            })
            
        }
        
    })
    console.log(counter);
    return counter;
};

const formLabel = document.querySelectorAll('.form__label');
const formCheckbox = document.querySelectorAll('.quiz-block__checkbox');
const formInputs = document.querySelectorAll('.form__input-hidden[type=checkbox]');



// formInputs.forEach(input => {
//     input.addEventListener('click', (e) => {
//         if(input.checked) {
//             console.log('input checked');
//         } else if(!input.checked) {
//             btnNext.forEach(btn => {
//                         btn.disabled = !btn.disabled
//                         console.log('btn disabled');
//                     })
//         }
//         e.stopPropagation()
        
//     })
// })
formLabel.forEach((item, index) => {
    item.addEventListener('change', (e) => {
        e.stopPropagation()
        for(let i = 0; i < formCheckbox.length; i++) {
            if(i == index) {
                formCheckbox[i].classList.toggle('quiz-block__checkbox-active')
            }
        }
        
    })
})