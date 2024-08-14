window.addEventListener('scroll', function() {
    var headerContainer = document.querySelector('.header-container');
    var block = document.querySelector('.block');
    var headerBottom = headerContainer.getBoundingClientRect().bottom;

    if (window.pageYOffset > headerBottom) {
        block.classList.add('fixed');
    } else {
        block.classList.remove('fixed');
    }
});