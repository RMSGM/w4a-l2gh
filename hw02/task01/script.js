function toGoogle() {
    window.open('http://google.com', '_self');
}

function delContent() {
    document.getElementsByTagName('body')[0].innerHTML = "";
}

document.addEventListener('DOMContentLoaded', function () { 

    document.getElementById('toGoogle').addEventListener("click", toGoogle);
    document.getElementById('delContent').addEventListener("click", delContent);

});