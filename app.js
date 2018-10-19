/*const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla multiplicar', {
        base: {
            demand: true, //comando obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //valor pro defecto de "limite"
        }
    })

.command('crear', 'Imprime en consola tabla multiplicar', {
        base: {
            demand: true, //comando obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10 //valor pro defecto de "limite"
        }
    })
    .help()
    .argv;
AHORA TODA ESTA CONFIGURACION VIENE DEL ARCHIVO YARGS.JS*/

const argv = require('./config/yargs').argv; //ESTOY LLAMANDO LA FUNCION ARGV DESDE YARGS.JS
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0]; //En el espacio 0 del argv se deben crear todos los comandos

switch (comando) { //como un if que permite determinar una accion en base a una condicion a definir
    case 'listar':
        listarTabla(argv.base, argv.limite)
        console.log('listar');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        console.log(`tabla-${argv.base} hasta el ${argv.limite} creada`.red);
        break;

    default:
        console.log('comando no reconocido');
}

//let argv2 = process.argv;

//console.log('limite', argv.limite);


//let parametro = argv[2];
//let base = parametro.split('=')[1]



//crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado ${archivo}`))
//    .catch(e => console.log(e));