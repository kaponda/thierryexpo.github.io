// Scroll Animation Home

let homeImage = document.querySelector('.homeImage');
let nav = document.querySelector('.navbar');
let button = document.querySelector('button');
let img = document.querySelector('.img');
let games = document.querySelector('#games');
let body = document.querySelector('body');
let presentation = document.querySelector('#presentation');
let contact = document.querySelector('#contact');

button.addEventListener('click', ()=> {
    nav.classList.toggle('navbarScrollButton');
});

nav.style.transition = '1s';

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top-300 + window.scrollY
    };
}

window.addEventListener('scroll', ()=>{
    let y = window.scrollY;
    homeImage.style.transform = `translateY(${y/5}px) scale(${1 + (y/2500)})`;
    if (y >= '100') {
        nav.classList.add('navbarScroll');
    }else{
        nav.classList.remove('navbarScroll');
    }

    if (y < getOffset(presentation).top) {
        body.style.backgroundColor = '#3a2850';
    }

    if (y >= getOffset(presentation).top) {
        body.style.backgroundColor = '#1c1836';
    }

    if (y >= getOffset(games).top && y < getOffset(games).top) {
        body.style.backgroundColor = '#1c1836';
    }

    if (y >= getOffset(contact).top) {
        body.style.backgroundColor = '#461c2a';
    }
    
});

// Random Monster card Animation

let monsters = [
    "monsterBlue.png",
    "monsterGreen.png",
    "monsterRed.png",
    "monsterPurple.png",
    "monsterDark.png",
    "monsterLightBlue.png",
    "monsterLightPurple.png",
    "monsterLightGreen.png"
];

let monster = document.querySelectorAll('.monster');

monster.forEach(monster => {
    let myMonsters = [...monsters];
    
    for (let i = 0; i < 3; i++) {
        let random = Math.random() * (myMonsters.length - 0) + 0;
        random = Math.floor(random);
        let randomMonster = myMonsters.splice(random, 1);
        let newMonster = document.createElement('img');
        newMonster.setAttribute('src', `../public/img/${randomMonster}`);
        newMonster.classList.add(`monster${i}`);
        monster.appendChild(newMonster);
    }
    
});

let gameCard = document.querySelectorAll('.cardWrapper');

gameCard.forEach((element) => {
    element.setAttribute('data-aos-duration', 500);
});

// backdrop filter on card Hover

let filter = document.querySelector('.myGames');

gameCard.forEach((element, index) => {
    element.addEventListener('mouseover', ()=> {
        filter.style.backdropFilter = `hue-rotate(-60deg)`;
    });

    element.addEventListener('mouseleave', ()=> {
        filter.style.backdropFilter = 'none';
    });
});

// Maps

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.85705972307314, lng: 4.408627698427841},
        zoom: 18,
        mapId: '2f67b456d0d3acc9'
    });
}

let form = document.querySelector('.formContact');

function sendMail(){
    var tempParams = {
        from_name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_2r9383i", "template_ixets0t", tempParams).then(function (res) {});
    
}