function toGoogle() {
    window.open('http://google.com', '_self');
}

function delContent() {
    document.getElementsByTagName('body')[0].innerHTML = "";
}

function convUser() {
    var userName = prompt("Please, enter Username:");
    var userName_adj = '';

    if (/\d/.test(userName) == true) { //checking for existing numbers
        userName_adj = userName.split("").reverse().join("");
    } else {
        for (var i = 0; i <= userName.length - 1; i++) {
            if (i % 2) { // position - 0/2/4..
                userName_adj += userName[i].toUpperCase();
            } else { //position - 1/3/5..
                userName_adj += userName[i].toLowerCase();
            }
        }
    }

    document.getElementById('userName').innerHTML = userName_adj;
}

document.addEventListener('DOMContentLoaded', function () { 

    document.getElementById('toGoogle').addEventListener("click", toGoogle);
    document.getElementById('delContent').addEventListener("click", delContent);

    document.getElementById('convUser').addEventListener("click", convUser);

});