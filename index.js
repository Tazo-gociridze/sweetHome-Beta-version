new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // pagination: {
    //      el: '.swiper-pagination',
    //      clickable : true,
    //      dynamicBullets : true
    // }

    scrollbar : {
        el: '.swiper-scrollbar',
        draggable : true
    }
});

const infoText = document.querySelector('.info-text-1')
const darkBox = document.querySelector('.darkbox-content-div')


    infoText.addEventListener('mouseover', function(){
        darkBox.style.opacity = '0';
        darkBox.style.height = '0px';
        darkBox.style.transform.translateY = '-100px';
        infoText.style.height = '630px';
        infoText.style.transition = '0.5s'
    })
   
    infoText.addEventListener('mouseout', function(){
        darkBox.style.opacity = '1';
        darkBox.style.height = '250px';
        infoText.style.height = '370px';
    })

    
const navigationIcon_1 = document.querySelector('.navigation-icon-link-1')
const navigationIcon_2 = document.querySelector('.navigation-icon-link-2')
const navigationIcon_3 = document.querySelector('.navigation-icon-link-3')
const testimonial1 = document.querySelector('.testimonial-1')
const testimonial2 = document.querySelector('.testimonial-2')
const testimonial3 = document.querySelector('.testimonial-3')


navigationIcon_1.addEventListener('click', function(){
       testimonial1.style.opacity = '1';
       testimonial2.style.opacity = '0';
       testimonial3.style.opacity = '0';
})

navigationIcon_2.addEventListener('click', function(){
    testimonial1.style.opacity = '0';
    testimonial2.style.opacity = '1';
    testimonial3.style.opacity = '0';
})

navigationIcon_3.addEventListener('click', function(){
    testimonial1.style.opacity = '0';
    testimonial2.style.opacity = '0';
    testimonial3.style.opacity = '1';
})



//sitebarJS ----------------------->
const sitebarDisactive = document.querySelector('.sitebar-disactive')
const sitebar = document.querySelector('.sitebar')
const sitebarActive = document.querySelector('.sitebar-active')

sitebarActive.addEventListener('click', function(){
    sitebar.style.margin = '0px 0px 0px 296px'   
})

sitebarDisactive.addEventListener('click', function(){
    sitebar.style.margin = '0px 0px 0px 0px'
   
})
