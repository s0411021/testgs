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

    const url='https://script.google.com/macros/s/AKfycbwWAraXAkE8jOvkYeSicKwKmmrQZC0T_X0EuIeXdtcezGf2qGTwRVTft4HCyf6X-BUrUw/exec'
    
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({"First":"家駿","Last":"陳","Telephone":"21800000"}) // body data type must match "Content-Type" header    
    })
    

}
    
    document.getElementById('btn2').addEventListener('click',addGS);
