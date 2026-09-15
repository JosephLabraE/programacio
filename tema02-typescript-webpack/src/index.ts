import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Button} from './components/Button';


const app = document.querySelector<HTMLElement>('#app');
if(!app){
    throw new Error('No se encontró el elemento con id "app"');
}
const header = new Header(`Programacion web Avanzada     `);
const button = new Button(`Guardar Cambios`);
const footer = new Footer();


app.innerHTML = `
    ${header.render()}
    ${button.render()}
    ${footer.render()}
`;

document.querySelector("#saveBtn")?.addEventListener("click", () => button.onClick());
