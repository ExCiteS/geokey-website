window.onload = function () {
    var button = document.getElementById('burger');
    var menue = document.getElementById('nav');
    button.onclick = function () {
        if (menue.getAttribute('class') === 'active') {
            menue.removeAttribute('class');
        } else {
            menue.setAttribute('class', 'active');
        }
    }
}
