const colls = document.getElementsByClassName('collapsible');

for (let elem of colls) {
    elem.addEventListener('click', function() {
        elem.classList.toggle('active');
        const content = elem.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}