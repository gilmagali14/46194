// Generated from Segurate.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SegurateListener from './SegurateListener.js';
import SegurateVisitor from './SegurateVisitor.js';

const serializedATN = [4,1,17,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,2,1,2,1,2,3,2,34,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,
5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,12,14,43,0,15,1,0,0,0,2,
21,1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,37,1,0,0,0,10,41,1,0,0,0,12,45,1,
0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,
0,0,18,19,1,0,0,0,19,20,5,0,0,1,20,1,1,0,0,0,21,22,5,1,0,0,22,23,5,15,0,
0,23,24,5,2,0,0,24,25,5,3,0,0,25,26,3,4,2,0,26,27,5,4,0,0,27,28,3,12,6,0,
28,29,5,5,0,0,29,3,1,0,0,0,30,34,3,6,3,0,31,34,3,8,4,0,32,34,3,10,5,0,33,
30,1,0,0,0,33,31,1,0,0,0,33,32,1,0,0,0,34,5,1,0,0,0,35,36,5,6,0,0,36,7,1,
0,0,0,37,38,5,7,0,0,38,39,5,8,0,0,39,40,5,16,0,0,40,9,1,0,0,0,41,42,5,9,
0,0,42,43,5,10,0,0,43,44,5,11,0,0,44,11,1,0,0,0,45,46,7,0,0,0,46,13,1,0,
0,0,2,17,33];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SegurateParser extends antlr4.Parser {

    static grammarFileName = "Segurate.g4";
    static literalNames = [ null, "'regla'", "'{'", "'cuando'", "'entonces'", 
                            "'}'", "'intentoAccesoFueraHorario'", "'intentosFallidos'", 
                            "'>'", "'accesoARecursosSensibles'", "'y'", 
                            "'noEsAdministrador'", "'agregarUsuarioAListaNegra'", 
                            "'agregarIPAListaNegra'", "'activarMonitoreoDetallado'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, "AGREGAR_USUARIO", 
                             "AGREGAR_IP", "ACTIVAR_MONITOREO", "ID", "NUMERO", 
                             "WS" ];
    static ruleNames = [ "dsl", "regla", "condicion", "accesoNoAutorizado", 
                         "multiplesIntentosFallidos", "actividadSospechosa", 
                         "comando" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SegurateParser.ruleNames;
        this.literalNames = SegurateParser.literalNames;
        this.symbolicNames = SegurateParser.symbolicNames;
    }



	dsl() {
	    let localctx = new DslContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SegurateParser.RULE_dsl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.regla();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 19;
	        this.match(SegurateParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SegurateParser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(SegurateParser.T__0);
	        this.state = 22;
	        this.match(SegurateParser.ID);
	        this.state = 23;
	        this.match(SegurateParser.T__1);
	        this.state = 24;
	        this.match(SegurateParser.T__2);
	        this.state = 25;
	        this.condicion();
	        this.state = 26;
	        this.match(SegurateParser.T__3);
	        this.state = 27;
	        this.comando();
	        this.state = 28;
	        this.match(SegurateParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SegurateParser.RULE_condicion);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.accesoNoAutorizado();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.multiplesIntentosFallidos();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.actividadSospechosa();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accesoNoAutorizado() {
	    let localctx = new AccesoNoAutorizadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SegurateParser.RULE_accesoNoAutorizado);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(SegurateParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplesIntentosFallidos() {
	    let localctx = new MultiplesIntentosFallidosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SegurateParser.RULE_multiplesIntentosFallidos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(SegurateParser.T__6);
	        this.state = 38;
	        this.match(SegurateParser.T__7);
	        this.state = 39;
	        this.match(SegurateParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actividadSospechosa() {
	    let localctx = new ActividadSospechosaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SegurateParser.RULE_actividadSospechosa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(SegurateParser.T__8);
	        this.state = 42;
	        this.match(SegurateParser.T__9);
	        this.state = 43;
	        this.match(SegurateParser.T__10);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SegurateParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SegurateParser.EOF = antlr4.Token.EOF;
SegurateParser.T__0 = 1;
SegurateParser.T__1 = 2;
SegurateParser.T__2 = 3;
SegurateParser.T__3 = 4;
SegurateParser.T__4 = 5;
SegurateParser.T__5 = 6;
SegurateParser.T__6 = 7;
SegurateParser.T__7 = 8;
SegurateParser.T__8 = 9;
SegurateParser.T__9 = 10;
SegurateParser.T__10 = 11;
SegurateParser.AGREGAR_USUARIO = 12;
SegurateParser.AGREGAR_IP = 13;
SegurateParser.ACTIVAR_MONITOREO = 14;
SegurateParser.ID = 15;
SegurateParser.NUMERO = 16;
SegurateParser.WS = 17;

SegurateParser.RULE_dsl = 0;
SegurateParser.RULE_regla = 1;
SegurateParser.RULE_condicion = 2;
SegurateParser.RULE_accesoNoAutorizado = 3;
SegurateParser.RULE_multiplesIntentosFallidos = 4;
SegurateParser.RULE_actividadSospechosa = 5;
SegurateParser.RULE_comando = 6;

class DslContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegurateParser.RULE_dsl;
    }

	EOF() {
	    return this.getToken(SegurateParser.EOF, 0);
	};

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.enterDsl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.exitDsl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegurateVisitor ) {
	        return visitor.visitDsl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegurateParser.RULE_regla;
    }

	ID() {
	    return this.getToken(SegurateParser.ID, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegurateVisitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegurateParser.RULE_condicion;
    }

	accesoNoAutorizado() {
	    return this.getTypedRuleContext(AccesoNoAutorizadoContext,0);
	};

	multiplesIntentosFallidos() {
	    return this.getTypedRuleContext(MultiplesIntentosFallidosContext,0);
	};

	actividadSospechosa() {
	    return this.getTypedRuleContext(ActividadSospechosaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegurateVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccesoNoAutorizadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegurateParser.RULE_accesoNoAutorizado;
    }


	enterRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.enterAccesoNoAutorizado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.exitAccesoNoAutorizado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegurateVisitor ) {
	        return visitor.visitAccesoNoAutorizado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplesIntentosFallidosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegurateParser.RULE_multiplesIntentosFallidos;
    }

	NUMERO() {
	    return this.getToken(SegurateParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.enterMultiplesIntentosFallidos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.exitMultiplesIntentosFallidos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegurateVisitor ) {
	        return visitor.visitMultiplesIntentosFallidos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActividadSospechosaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegurateParser.RULE_actividadSospechosa;
    }


	enterRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.enterActividadSospechosa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.exitActividadSospechosa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegurateVisitor ) {
	        return visitor.visitActividadSospechosa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegurateParser.RULE_comando;
    }

	AGREGAR_USUARIO() {
	    return this.getToken(SegurateParser.AGREGAR_USUARIO, 0);
	};

	AGREGAR_IP() {
	    return this.getToken(SegurateParser.AGREGAR_IP, 0);
	};

	ACTIVAR_MONITOREO() {
	    return this.getToken(SegurateParser.ACTIVAR_MONITOREO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegurateListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegurateVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SegurateParser.DslContext = DslContext; 
SegurateParser.ReglaContext = ReglaContext; 
SegurateParser.CondicionContext = CondicionContext; 
SegurateParser.AccesoNoAutorizadoContext = AccesoNoAutorizadoContext; 
SegurateParser.MultiplesIntentosFallidosContext = MultiplesIntentosFallidosContext; 
SegurateParser.ActividadSospechosaContext = ActividadSospechosaContext; 
SegurateParser.ComandoContext = ComandoContext; 
