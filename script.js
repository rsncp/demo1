var mySwiper = new mySwiper('.swiper-container', {
   navigation:{
       nextEl:'.swiper-button-next',
       prevEl:'.swiper-button-prev',
   },

})

let activeComp = mySwiper.activeIndex;

mySwiper.on('slideChange',() => {
    changeActiveClass(mySwiper.activeIndex)
})

function changeActiveClass(toAdd){
    for(const tab of tabs){
        if(toAdd.toString()== tab.id){
           tab.classlist.add('active')
        }
        else{
            tab.classlist.remove('active')
        }
    }
}

const tabs=document.querySelectorAll('.tab-name');

for(const tab of tabs){
    tab.addEventListener('click',(e) => {
        if(activeComp>=1){
            mySwiper.slidePrev();
            activeComp=e.target.id
            changeActiveClass(activeComp)
        }else{
            mySwiper.slideNext();
            activeComp=e.target.id
            changeActiveClass(activeComp)
        }
    }
}