const { response } = require("express");

const dosenNim ='19501021';
const updateData = {
    nama: 'Lukman',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Cibadak'
};

fetch(`http://localhost:3000/dosen/${dosenNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
}).then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error', error));
