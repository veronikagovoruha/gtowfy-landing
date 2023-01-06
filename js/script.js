document.addEventListener('click', documentClick);

function documentClick(e){
    const targetItem = e.target;

    if(targetItem.closest('.icon__menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}