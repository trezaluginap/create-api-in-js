const { response } = require("express");

const postData = {
    nim: '123458',
    nama: 'Alex Maxwill',
    gender: 'P',
    prodi: 'TI',
    alamat: '2343 Main Street'
};

fetch('http://localhost:3000/mahasiswa', {  
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error', error));
