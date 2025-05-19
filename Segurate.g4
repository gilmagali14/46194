grammar Segurate;
l         : regla+ EOF ;

regla       : 'regla' ID '{' 'cuando' condicion 'entonces' comando '}' ;

condicion   : accesoNoAutorizado
            | multiplesIntentosFallidos
            | actividadSospechosa ;

accesoNoAutorizado        : 'intentoAccesoFueraHorario' ;
multiplesIntentosFallidos : 'intentosFallidos' '>' NUMERO ;
actividadSospechosa       : 'accesoARecursosSensibles' 'y' 'noEsAdministrador' ;

comando     : AGREGAR_USUARIO
            | AGREGAR_IP
            | ACTIVAR_MONITOREO
            ;

AGREGAR_USUARIO : 'agregarUsuarioAListaNegra' ;
AGREGAR_IP      : 'agregarIPAListaNegra' ;
ACTIVAR_MONITOREO : 'activarMonitoreoDetallado' ;

ID          : LETRA (LETRA | DIGITO)* ; 
NUMERO      : DIGITO+ ;                

// Fragmentos léxicos
fragment LETRA   : [a-zA-Z] ;
fragment DIGITO  : [0-9] ;


WS : [ \t\r\n]+ -> skip;