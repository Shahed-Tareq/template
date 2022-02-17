// function to change the background color for navbar
function chang_Background(){
    const header = document.getElementById('nav');
    const top = window.scrollY;
    console.log(top)
    if(top>=100){
    
        header.style.backgroundColor ='white';
        header.style.borderBottom='1px solid rgba(68, 55, 55, 0.39)'
    }
    else{
        header.style.backgroundColor='transparent';
        header.style.borderBottom='none'
    }
} 

//function to show div top which will move us to header direct
const top1 = document.getElementById('top');
function show_div_top(){
    const top = window.scrollY;
    
    if(top>=500){
      top1.style.display="block"
    }
    else{
        top1.style.display="none"
    }
} 

//function about how to move to header when i below
top1.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
}

window.addEventListener('scroll' , chang_Background ,false)
window.addEventListener('scroll' , show_div_top ,false)

// function to get the home section
// let about = document.getElementById('about')
//  about.onclick =function ss(){
//     window.scrollTo(0,600);
//     console.log('sss')
// }
// let contact = document.getElementById('contact');
// contact.onclick = function(){
//     window.scrollTo(0,3290);
// }
/*
let home1 = document.getElementById('home');
let next = document.getElementById('next')
home1.onclick = function(){
    window.scrollTo({
        top:next.offsetTop,
        behavior:"smooth"
    });

}*/