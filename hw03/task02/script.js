function onCreate(ev) {
    ev.preventDefault();

    var data = JSON.stringify({
        "number": String(document.getElementById("cAccNumber").value),
        "type": String(document.getElementById("cAccType").value),
        "creationDate": String(document.getElementById("cAccCreationDate").value),
        "isActive": Boolean(document.getElementById("cAccIsActive").value),
    });
    console.log(data);

    xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(this.responseText);
            document.getElementById("createForm").dispatchEvent(new Event('submit'));
        }
    });

    xhr.open("POST", "http://ipaddr:2403/rms-account"); //...
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function onRead() {
    console.log('reading RMS-Account..'); //...

    xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            var resultTBody = document.createElement('tbody');

            result = JSON.parse(this.response);
            result.map(function (nthAccount) {
                resultTBody.appendChild(parseAccountToTableRow(nthAccount));
            });

            var table = document.getElementById('rTBody').parentElement;
            table.replaceChild(resultTBody, document.getElementById('rTBody'));
            resultTBody.id = 'rTBody';

            console.log('read was success');
        }
    });

    xhr.open("GET", "http://ipaddr:2403/rms-account"); //...
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}

function parseAccountToTableRow(Accounts) {
    var row = document.createElement('tr');

    accId = document.createElement('th');
    accId.innerText = Accounts['id'];
    row.appendChild(accId);

    accNumber = document.createElement('td');
    accNumber.innerText = Accounts['number'];
    row.appendChild(accNumber);

    accType = document.createElement('td');
    accType.innerText = Accounts['type'];
    row.appendChild(accType);

    accCreationDate = document.createElement('td');
    accCreationDate.innerText = Accounts['creationDate'];
    row.appendChild(accCreationDate);

    accIsActive = document.createElement('td');
    accIsActive.innerText = Accounts['isActive'];
    row.appendChild(accIsActive);

    return row;
}

function onPrepareUpdate(ev) {
    ev.preventDefault();

    xhrids = new XMLHttpRequest();

    xhrids.withCredentials = true;
    xhrids.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(this.response);
            var ids = document.createElement('select');
            ids.className = 'form-control';

            result = JSON.parse(this.response);
            result.map(function (nthAccount) {
                var accId = document.createElement('option');
                accId.innerHTML = nthAccount['id'];
                ids.appendChild(accId);
            });

            var form = document.getElementById('uid').parentElement;
            form.replaceChild(ids, document.getElementById('uid'));
            ids.id = 'uid';
        }
    });

    xhrids.open("GET", "http://ipaddr:2403/rms-account/"); //...
    xhrids.setRequestHeader("Content-Type", "application/json");
    xhrids.send();
}

function onUpdate(ev) {
    ev.preventDefault();

    var test = Boolean($("input[name='uAccIsActive']:checked").val());
    console.log(test);

    var data = JSON.stringify({
        "number": String(document.getElementById("uAccNumber").value),
        "type": String(document.getElementById("uAccType").value),
        "creationDate": String(document.getElementById("uAccCreationDate").value),
        "isActive": Boolean(document.getElementById("uAccIsActive").value),
    });
    console.log(data);

    xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", "http://ipaddr:2403/rms-account/" + document.getElementById("uid").value); //...
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}


function onDelete(ev) {
    ev.preventDefault();

    xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", "http://ipaddr:2403/rms-account/" + document.getElementById("did").value); //..
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}


(function () {
    document.getElementById('cbutton').addEventListener('click', onCreate);

    document.getElementById('rbutton').addEventListener('click', onRead);

    document.getElementById('pubutton').addEventListener('click', onPrepareUpdate);
    document.getElementById('ubutton').addEventListener('click', onUpdate);

    document.getElementById('dbutton').addEventListener('click', onDelete);

    console.log('Handlers is set')
})()