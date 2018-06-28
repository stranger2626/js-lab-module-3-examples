const fs = require('fs');
const Client = require('node-rest-client').Client;

const client = new Client();

client.get('https://rickandmortyapi.com/api/character/', (data, response) => {
    if (response.statusCode === 200) {
        fs.writeFileSync('R&MDB.json', JSON.stringify(data), 'utf-8');  
        console.log('Data recieved!');  
    }
    else {
        console.log('Something went wrong! Response code:' + response.statusCode);
    }
});