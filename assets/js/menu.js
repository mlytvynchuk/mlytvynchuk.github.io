function notDisplayModal() {
    var menu = document.getElementById('filter-container');
    menu.className += 'menu-container notDisplay';
}

function displayModal() {
    var menu = document.getElementById('filter-container');
    menu.className += 'menu-container';
}