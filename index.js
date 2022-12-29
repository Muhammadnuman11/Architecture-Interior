burger = document.querySelector('.burger')
manu = document.querySelector('.manu')

burger.addEventListener('click', ()=>{
    manu.classList.toggle('h-manu-resp');
    burger.classList.toggle('h-line-resp');
    burger.classList.toggle('change');
})


document.querySelector('.scroll-btn').addEventListener('click', () =>{
    document.querySelector('html').style.scrollBehavior="smooth";
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior="unset";
    }, 1000);
})