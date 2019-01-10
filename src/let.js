var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.textContent = i;
    button.addEventListener('click', function() {
        console.log(i);
    });
}