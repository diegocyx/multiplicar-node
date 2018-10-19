const opt = {
    base: {
        demand: true, //comando obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10 //valor pro defecto de "limite"
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla multiplicar', opt)
    .command('crear', 'Imprime en consola tabla multiplicar', opt)
    .help()
    .argv;


module.exports = {
    argv
}