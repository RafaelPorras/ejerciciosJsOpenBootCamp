import moment from 'moment';


const saludar = () => console.log('Hola');
const hora = () => console.log(moment().format('LTS'));

saludar();
hora();