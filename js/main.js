const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus');


// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} ${amPm}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
// function addZero(n) {
//     return (parseInt(n, 10) < 10 ? '0' : '') + n;
// }

// Set Background and Greeting
function setBgAndGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        document.body.style.background = "url(img/morning.jpg) center center";
        greeting.textContent = `Good Morning`;
    } else if(hour < 18) {
        document.body.style.background = "url(img/afternoon.jpg) center center";
        greeting.textContent = `Good Afternoon`;
    } else {
        document.body.style.background = "url(img/night.jpg) center center";
        greeting.textContent = `Good Night`;
        document.body.style.color = '#fff';
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        if(e.keyCode == 13) {
            localStorage.setItem('name', name.textContent);
            name.blur();
        }
    } else {
        localStorage.setItem('name', name.textContent);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        if(e.keyCode == 13) {
            localStorage.setItem('focus', focus.textContent);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', focus.textContent);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgAndGreet();
getName();
getFocus();