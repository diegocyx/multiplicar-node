const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('============='.green);
    console.log(` tabla del ${base}`.green);
    console.log('============='.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`);
    }
}


crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        let data = '';


        //2*1 = 2
        //2*2 = 4
        //...
        //2*10

        for (let i = 1; i <= limite; i++) {
            data += (`${base}*${i}=${base*i}\n`); // += concatena todo
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}