function testGS(){

const url='https://script.google.com/macros/s/AKfycby_3iSXSHge-4pm76kfVjW3uRMSOH0aSGatPaOgjpnYankyZYyRuvPyuAlRhqfGEmUEgg/exec'

fetch(url)
    .then( d => d.json())
    .then( d => {
            document.getElementById('app').textContent = d[0].status;
    })
}

document.getElementById('btn').addEventListener('click',testGS);




function addGS(){

    const url='https://script.google.com/macros/s/AKfycby_3iSXSHge-4pm76kfVjW3uRMSOH0aSGatPaOgjpnYankyZYyRuvPyuAlRhqfGEmUEgg/exec'
    
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({name:'John'}) // body data type must match "Content-Type" header    
    })
    

}
    
    document.getElementById('btn2').addEventListener('click',addGS);