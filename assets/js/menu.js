function notDisplayModal() {
    var menu = document.getElementById('filter-container');

    menu.className += 'menu-container notDisplay';
    var container = document.getElementsByTagName('body')[0]
    container.className = '';
}

function displayModal() {
    var menu = document.getElementById('filter-container');
    menu.className += 'menu-container';
    var container = document.getElementsByTagName('body')[0]
    container.className += 'modal-open';


}

function displayDiscount() {
    var menu = document.getElementById('discount-modal');
    menu.className += 'menu-container';
    var container = document.getElementsByTagName('body')[0]
    container.className += 'modal-open';


}

function notDisplayDiscount() {
    var menu = document.getElementById('discount-modal');

    menu.className += ' notDisplay';
    var container = document.getElementsByTagName('body')[0]
    container.className = '';

}
/*for user profile*/ 
function displayAddDiscount() {
    var menu = document.getElementById('add-discount');
    menu.className += 'menu-container';

}

function notDisplayAddDiscount() {
    var menu = document.getElementById('add-discount');
    menu.className = 'menu-container';
    menu.className += ' notDisplay';
}


function displayLikes() {
    var menu = document.getElementById('likes-container');
    menu.className += 'menu-container';

}

function notDisplayLikes() {
    var menu = document.getElementById('likes-container');
    menu.className = 'menu-container';
    menu.className += ' notDisplay';
}
