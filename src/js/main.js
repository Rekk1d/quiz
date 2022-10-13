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
            console.log(index);
        }
        item.classList.remove('form__item-active')
        item.classList.add('form__item-non-active')
       
    })
})



function showFirstFormItem (index, count) {
    formItems.forEach((item, i) => {
    //    if(item.id !== "0") {
    //     item.classList.add('form__item-non-active')
    //    } else if(item.id == "0") {
    //         item.classList.remove('form__item-non-active')
    //         item.classList.add('form__item-active')
    //    }
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
        // switch(index){
        //     case item.id:
        //         item.classList.remove('form__item-non-active')
        //         item.classList.add('form__item-active')
        //     default: 

        // }

    })
}

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
btnPrev.forEach(btn => {
    btn.addEventListener('click', (e) => {
        idx-=1
        console.log(idx);
        e.preventDefault()
        // formItems.forEach((item, i) => {
        //         if(item.classList.contains('form__item-active')) {
        //             item.classList.remove('form__item-active')
        //             item.classList.add('form__item-non-active')
                    
                    
        //         }
        //         if(item.id == idx) {
        //             item.classList.add('form__item-active')
        //             item.classList.remove('form__item-non-active')
                    
        //         }
        // })
        formItemActive(idx)
    })
})


btnNext.forEach((btn, index) => {
    
    btn.addEventListener('click', (e) => {
        idx+=1
        e.preventDefault()
        formItemActive(idx)
        // formItems.forEach((item, i) => {
        //         if(item.classList.contains('form__item-active')) {
        //             item.classList.remove('form__item-active')
        //             item.classList.add('form__item-non-active')
                    
                    
        //         }
        //         if(item.id == idx) {
        //             item.classList.add('form__item-active')
        //             item.classList.remove('form__item-non-active')
                    
        //         }
        // })
        // for(let i = 0; i < formItems.length; i++) {
        //     formItems[i].classList.remove('form__item-active');
        //     if(i === index) {
        //         console.log(true);
        //         console.log(formItems[i]);
        //         formItems[i].classList.add('form__item-active')
        //     }
        // }
    })
})


const formLabel = document.querySelectorAll('.form__label');
const formCheckbox = document.querySelectorAll('.quiz-block__checkbox');

// formLabel.forEach((item, index) => {
//     item.addEventListener('click', () => {
   
//         for(let i = 0; i < formCheckbox.length; i++) {
//             console.log(formCheckbox[i]);
//             // if(i == index) {
//             //     formCheckbox[i].classList.toggle('quiz-block__checkbox-active')
//             //     console.log(true);
//             //     console.log(item);
//             //     console.log(formCheckbox[i]);
//             // }
//         }
//     })
// })