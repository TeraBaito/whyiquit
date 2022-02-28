// Make every link in the speech div open in another tab
for (let link of document.getElementsByClassName('speech')[0].getElementsByTagName('a')) link.target = '_blank';

// TELL ME IF YOU AREN'T HERE AND WE TALK A LOT (you should know I dislike you if I dislike you)
const names = [
    "Kirito",
    "Max",
    "Kowa",
    "Shrimp",
    "Meme",
    "Plont",
    "Ali",
    "Emmi",
    "Maid",
    "Mason",
    "Facad3",
    "Birbo",
    "Pent",
    "Grady",
    "Firebreak",
    "Tech",
    "Marsh",
    "Gimble",
    "Uber",
    "Pigeon",
    "AJ",
    "Glutch",
    "Jass",
    "Aru",
    "Jish",
    "Potato",
    "4",
    "Mark",
    "pp",
    "Kirito",
    "Kirito",
    "Kirito",
    "Kirito",
    "Kirito" // (๑・ω・๑)
];

for (let name of names) {
    const elem = Object.assign(document.createElement('span'), { className: 'listitem', textContent: name })
    document.getElementById('listbox').append(elem)
}

// Add specific date here, maybe without hour because that's kinda creepy lol
document.getElementById('date').innerHTML = new Date('February 1, 2022').toDateString();

// Checks if the HTML of opinion.html has an element by name "notyet"
// meaning the opinion website isn't released yet
async function isOpinionAvailable() {
    const raw = await fetch('./opinion.html').then(res => res.text()).then(data => data);
    console.log(raw);
    const html = new DOMParser().parseFromString(raw, 'text/html');
    console.log(html)
    if (html.getElementById('notyet')) 
        Swal.fire({
            text: 'The page isn\'t available yet, It\'ll probably be released when Tera resigns from moderation',
            icon: 'error'
        });
    else {
        Swal.fire({
            text: 'The page has been released, you\'ll be redirected to it...',
            icon: 'success',
            showConfirmButton: false
        });
        setTimeout(() => window.location.replace('/opinion'), 2000);
    }   
}

function gameIncrement() {
    const elem = document.getElementById('gameButton');
    elem.innerHTML = Number(elem.innerHTML) + 1;
}