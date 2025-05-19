import SegurateVisitor from './generated/SegurateVisitor.js';

export class CustomSegurateVisitor extends SegurateVisitor {
    constructor() {
        super();
        this.reglas = [];
    }

    visitRegla(ctx) {
        const id = ctx.ID().getText();
        const condicion = ctx.condicion().getText();
        const comando = ctx.comando().getText();

        const regla = {
            tipo: 'regla',
            identificador: id,
            condicion: condicion,
            comando: comando
        };
        this.reglas.push(regla);

        console.log(`\n Regla detectada:`);
        console.log(` Condición: ${condicion}`);
        console.log(` Comando: ${comando}`);
        console.log(` Identificador: ${id}`);

        return regla;
    }

    getReglas() {
        return this.reglas;
    }

    ejecutarComando(comando) { //interpreta q haria cada comando
        switch (comando) {
            case 'agregarUsuarioAListaNegra':
                console.log(" Usuario agregado a lista negra.");
                break;
            case 'agregarIPAListaNegra':
                console.log(" IP agregada a lista negra.");
                break;
            case 'activarMonitoreoDetallado':
                console.log(" Monitoreo detallado activado.");
                break;
            default:
                console.warn(` Comando desconocido: ${comando}`);
        }
    }
}