import SegurateListener from './generated/SegurateListener.js';

export class CustomSegurateListener extends SegurateListener {
    constructor() {
        super();
        this.ruleCount = 0; //ctas reglas ha procesado
    }

    enterRegla(ctx) { //el arbol entra en una regla, incrementa el contador y obtiene el nombre de la regla
        this.ruleCount++;
        const id = ctx.ID().getText();
        console.log(` Entrando en regla: ${id}`);
    }

    exitRegla(ctx) {
        const id = ctx.ID().getText();
        console.log(` Salida de regla: ${id}`);
    }

    enterCondicion(ctx) { //entra en una condicion
        const condicion = ctx.getText();
        console.log(` Condición detectada: ${condicion}`);
    }

    enterComando(ctx) {
        const comando = ctx.getText();
        console.log(`Comando ejecutado: ${comando}`);
    }
}