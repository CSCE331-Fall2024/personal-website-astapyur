function toggleStyleSheet(){
    const currStyle = document.getElementById('currStyle');
    if (currStyle.getAttribute('href')=== 'style.css'){
        currStyle.setAttribute('href', 'style2.css');
        localStorage.setItem('preferredStyle', 'style2.css');
    }
    else {
        currStyle.setAttribute('href', 'style.css');
        localStorage.setItem('preferredStyle', 'style.css');
    }
}

function applyStyle(){
    const currStyle = document.getElementById('currStyle');

    if(localStorage.getItem('preferredStyle')){
        currStyle.setAttribute('href', localStorage.getItem('preferredStyle'));
    }
}

window.onload = applyStyle();