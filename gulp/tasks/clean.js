import del from 'del';
import paths from '../paths.js';

const clean = () => del(paths.clean.dir);

export default clean;
