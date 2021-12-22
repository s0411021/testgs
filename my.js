function testGS(){

const url='https://script.google.com/macros/s/AKfycbyaZmOztdXzTm0zNOe1lDD6L7zwQCZXn9oJ2_QB44vbJCZtq1auGjEB75B_3PKmDsyjsA/exec'

fetch(url)
    .then( d => d.json())
    .then( d => {

            document.getElementById('app').textContent = d[0].status;
            
    })
}

document.getElementById('btn').addEventListener('click',testGS);