let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

// Next Button Click
nextButton.onclick = function() {
    showSlider('next');
};

// Previous Button Click
prevButton.onclick = function() {
    showSlider('prev');
};

// See More Buttons Click
seeMoreButtons.forEach((button) => {
    button.onclick = function() {
        carousel.classList.add('showDetail');
    };
});

// Back Button Click
backButton.onclick = function() {
    carousel.classList.remove('showDetail');
};

let unAcceptClick;

const showSlider = (type) => {
    // Disable button clicks during transition
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    // Remove existing animation classes
    carousel.classList.remove('next', 'prev');

    // Get all carousel items
    let items = document.querySelectorAll('.carousel .list .item');

    if (type === 'next') {
        // Move the first item to the end
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        // Move the last item to the beginning
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }

    // Re-enable button clicks after 2 seconds
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
}

seeMoreButtons.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('showDetail');
    }
})
backButton.oncliclick = function(){
    carousel.classList.remove('showDetail');
}
