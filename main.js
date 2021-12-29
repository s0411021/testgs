const url='https://script.google.com/macros/s/AKfycbx4Ktg6I9xwmCT4XSUUL-yPWlnJ6tcqAa1BseTlq-IUjkdyrvY0WoQDEwCv5msiXxX_jw/exec'

function testGS(){

fetch(url)
    .then( d => d.json())
    .then( d => {
            document.getElementById('app').textContent = d[0].status;
    })
}
document.getElementById('btn').addEventListener('click',testGS);

function addGS(){

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({"First":firstName,"Last":lastName,"Telephone":phoneNumber}) // body data type must match "Content-Type" header    
    })
}
document.getElementById('btn2').addEventListener('click',addGS);