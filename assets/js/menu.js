function notDisplayModal() {
    var menu = document.getElementById('filter-container');
    menu.className += 'menu-container notDisplay';
}

function displayModal() {
    var menu = document.getElementById('filter-container');
    menu.className += 'menu-container';
}

function displayDiscount() {
    var menu = document.getElementById('discount-modal');
    menu.className += 'menu-container';

}

function notDisplayDiscount() {
    var menu = document.getElementById('discount-modal');
    menu.className = 'menu-container';
    menu.className += ' notDisplay';
}

function displayAddDiscount() {
    var menu = document.getElementById('add-offer');
    menu.className += 'menu-container';

}

function notDisplayAddDiscount() {
    var menu = document.getElementById('add-offer');
    menu.className = 'menu-container';
    menu.className += ' notDisplay';
}
