import fs from 'fs';
import path from 'path';
import readline from 'readline';
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from 'antlr4';

// Importar Lexer, Parser y Visitor personalizado
import SegurateLexer from './generated/SegurateLexer.js';
import SegurateParser from './generated/SegurateParser.js';
import { CustomSegurateVisitor } from './CustomSegurateVisitor.js';
import { CustomSegurateListener } from './CustomSegurateListener.js';

// Manejador de errores personalizado, errores lexicos o sintacticos
class CustomSegurateErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this._errores = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this._errores.push({ line, column, msg });
        console.error(`❌ ERROR  Línea ${line}:${column} - ${msg}`);
    }

    hayErrores() { //devuelve true si hay errores y aborta la ejecucion
        return this._errores.length > 0;
    }
}

async function main() {
    let input;

    // lee la entrada desde el input.txt
    try {
        input = fs.readFileSync('input-error2.txt', 'utf8');

        if (!input.trim()){
            throw new Error("Archivo vacio");
        }



        console.log("Archivo leído correctamente.");
    } catch (err) {
        // Si no se puede leer o esta vacio, pedir entrada por consola
        console.log(" No se encontró input.txt. Ingrese código manualmente:");
        input = await leerCadena();

        if(!input || !input.trim()){
            console.error("No ingresase ningun codigo. Ejecucion cancelada. ");
            process.exit(1);
            
        }
    }

    // Proceso la entrada con ANTLR para obtener el lexer
let inputStream = CharStreams.fromString(input); //crea flujo de entrada
let lexer = new SegurateLexer(inputStream);

// Verificar si se generaron tokens, obtiene los tokens directamente del lexer antes de pasarlo al parser
const tokens = lexer.getAllTokens();

console.log("\n=== 🧾 TABLA DE TOKENS ===");
console.log("Lexema               | Token                  | Línea | Columna");
console.log("---------------------------------------------------------------");

if (tokens.length === 0) {
    console.log(" No se generaron tokens. Verifica la entrada y la gramática.");
} else {
    for (let token of tokens) {
        const text = token.text;
        if (!text || !text.trim()) continue;

        const tokenName =
            SegurateLexer.symbolicNames[token.type] ||
            SegurateLexer.ruleNames[token.type] ||
            `DESCONOCIDO (${token.type})`;

        const line = token.line;
        const column = token.column;

        console.log(`${text.padEnd(20)} | ${tokenName.padEnd(20)} | ${line}     | ${column}`);
    }
}

// Ahora vuelve a crear el tokenStream para el parser
inputStream = CharStreams.fromString(input); // Reusamos el input
lexer = new SegurateLexer(inputStream);     // Creamos el lexer otra vez
const tokenStream = new CommonTokenStream(lexer);
   

// === ANÁLISIS SINTÁCTICO === crea el parser usando los tokens procesados 
    const parser = new SegurateParser(tokenStream);
    parser.removeErrorListeners();
    const errorListener = new CustomSegurateErrorListener();
    parser.addErrorListener(errorListener);

    const tree = parser.dsl(); 

    if (errorListener.hayErrores()) {
        console.error("\n❌ Se encontraron errores en la entrada.");
        return;
    }

    console.log("\n Entrada válida.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`\n Árbol de derivación: ${cadena_tree}`);

    // Usar Visitor para interpretar semánticamente el árbol, recorre el arbol y extra reglas simulas acciones o guarda datos
    const visitor = new CustomSegurateVisitor();
    visitor.visit(tree);

   

    // Usar Listener para recorrer el árbol, crea instancia del CustomSegurateListener y usa sus etodos
    const listener = new CustomSegurateListener();
    ParseTreeWalker.DEFAULT.walk(listener, tree);

    console.log(`\n Total de reglas encontradas: ${listener.ruleCount}`);
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese código fuente: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

function exportarReglas(reglas) {
    const outputPath = path.join(import.meta.dirname, 'output.json');
    fs.writeFileSync(outputPath, JSON.stringify(reglas, null, 2), 'utf8');
    console.log(`\n Reglas exportadas a: ${outputPath}`);
    exportarReglas(visitor.getReglas());
}

// Ejecutar
main();