var nav = document.getElementById('docs-nav');
var cnt = document.getElementById('docs-cnt');
var nav_links = nav.getElementsByTagName('ul')[0];

var headers = document.getElementsByTagName('h3');


for (var i = 0, len = headers.length; i < len; i++) {
    var a = document.createElement('a');
    a.setAttribute('href', '#' + headers[i].getAttribute('id'));
    a.textContent = headers[i].textContent;

    li = document.createElement('li');
    li.appendChild(a);

    nav_links.appendChild(li);
}

var headerHeight = document.getElementsByTagName('header')[0]. offsetHeight;

window.onscroll = function () {
    if (window.scrollY > headerHeight) {
        nav.classList.add('fixed');
        cnt.classList.add('nav-fixed');
    } else {
        nav.classList.remove('fixed');
        cnt.classList.remove('nav-fixed');
    }
}
