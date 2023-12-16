const { response } = require("express");

const mahasiswaNimToDelete = '1102028';

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNimToDelete}`, {
    method: 'DELETE'
}).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error', error));
