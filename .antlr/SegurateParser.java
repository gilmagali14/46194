// Generated from c:/Users/Magalí/Analizador/Segurate.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class SegurateParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, AGREGAR_USUARIO=12, AGREGAR_IP=13, ACTIVAR_MONITOREO=14, 
		ID=15, NUMERO=16, WS=17;
	public static final int
		RULE_l = 0, RULE_regla = 1, RULE_condicion = 2, RULE_accesoNoAutorizado = 3, 
		RULE_multiplesIntentosFallidos = 4, RULE_actividadSospechosa = 5, RULE_comando = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"l", "regla", "condicion", "accesoNoAutorizado", "multiplesIntentosFallidos", 
			"actividadSospechosa", "comando"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'regla'", "'{'", "'cuando'", "'entonces'", "'}'", "'intentoAccesoFueraHorario'", 
			"'intentosFallidos'", "'>'", "'accesoARecursosSensibles'", "'y'", "'noEsAdministrador'", 
			"'agregarUsuarioAListaNegra'", "'agregarIPAListaNegra'", "'activarMonitoreoDetallado'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			"AGREGAR_USUARIO", "AGREGAR_IP", "ACTIVAR_MONITOREO", "ID", "NUMERO", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Segurate.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public SegurateParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(SegurateParser.EOF, 0); }
		public List<ReglaContext> regla() {
			return getRuleContexts(ReglaContext.class);
		}
		public ReglaContext regla(int i) {
			return getRuleContext(ReglaContext.class,i);
		}
		public LContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_l; }
	}

	public final LContext l() throws RecognitionException {
		LContext _localctx = new LContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_l);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(15); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(14);
				regla();
				}
				}
				setState(17); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 );
			setState(19);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReglaContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(SegurateParser.ID, 0); }
		public CondicionContext condicion() {
			return getRuleContext(CondicionContext.class,0);
		}
		public ComandoContext comando() {
			return getRuleContext(ComandoContext.class,0);
		}
		public ReglaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_regla; }
	}

	public final ReglaContext regla() throws RecognitionException {
		ReglaContext _localctx = new ReglaContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_regla);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(T__0);
			setState(22);
			match(ID);
			setState(23);
			match(T__1);
			setState(24);
			match(T__2);
			setState(25);
			condicion();
			setState(26);
			match(T__3);
			setState(27);
			comando();
			setState(28);
			match(T__4);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ParserRuleContext {
		public AccesoNoAutorizadoContext accesoNoAutorizado() {
			return getRuleContext(AccesoNoAutorizadoContext.class,0);
		}
		public MultiplesIntentosFallidosContext multiplesIntentosFallidos() {
			return getRuleContext(MultiplesIntentosFallidosContext.class,0);
		}
		public ActividadSospechosaContext actividadSospechosa() {
			return getRuleContext(ActividadSospechosaContext.class,0);
		}
		public CondicionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicion; }
	}

	public final CondicionContext condicion() throws RecognitionException {
		CondicionContext _localctx = new CondicionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_condicion);
		try {
			setState(33);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
				enterOuterAlt(_localctx, 1);
				{
				setState(30);
				accesoNoAutorizado();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 2);
				{
				setState(31);
				multiplesIntentosFallidos();
				}
				break;
			case T__8:
				enterOuterAlt(_localctx, 3);
				{
				setState(32);
				actividadSospechosa();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AccesoNoAutorizadoContext extends ParserRuleContext {
		public AccesoNoAutorizadoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_accesoNoAutorizado; }
	}

	public final AccesoNoAutorizadoContext accesoNoAutorizado() throws RecognitionException {
		AccesoNoAutorizadoContext _localctx = new AccesoNoAutorizadoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_accesoNoAutorizado);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultiplesIntentosFallidosContext extends ParserRuleContext {
		public TerminalNode NUMERO() { return getToken(SegurateParser.NUMERO, 0); }
		public MultiplesIntentosFallidosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplesIntentosFallidos; }
	}

	public final MultiplesIntentosFallidosContext multiplesIntentosFallidos() throws RecognitionException {
		MultiplesIntentosFallidosContext _localctx = new MultiplesIntentosFallidosContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_multiplesIntentosFallidos);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(37);
			match(T__6);
			setState(38);
			match(T__7);
			setState(39);
			match(NUMERO);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ActividadSospechosaContext extends ParserRuleContext {
		public ActividadSospechosaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actividadSospechosa; }
	}

	public final ActividadSospechosaContext actividadSospechosa() throws RecognitionException {
		ActividadSospechosaContext _localctx = new ActividadSospechosaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_actividadSospechosa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			match(T__8);
			setState(42);
			match(T__9);
			setState(43);
			match(T__10);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComandoContext extends ParserRuleContext {
		public TerminalNode AGREGAR_USUARIO() { return getToken(SegurateParser.AGREGAR_USUARIO, 0); }
		public TerminalNode AGREGAR_IP() { return getToken(SegurateParser.AGREGAR_IP, 0); }
		public TerminalNode ACTIVAR_MONITOREO() { return getToken(SegurateParser.ACTIVAR_MONITOREO, 0); }
		public ComandoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comando; }
	}

	public final ComandoContext comando() throws RecognitionException {
		ComandoContext _localctx = new ComandoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_comando);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 28672L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u00110\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0004\u0000\u0010"+
		"\b\u0000\u000b\u0000\f\u0000\u0011\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"\"\b\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0000\u0000\u0007\u0000\u0002\u0004\u0006\b\n"+
		"\f\u0000\u0001\u0001\u0000\f\u000e+\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0002\u0015\u0001\u0000\u0000\u0000\u0004!\u0001\u0000\u0000\u0000\u0006"+
		"#\u0001\u0000\u0000\u0000\b%\u0001\u0000\u0000\u0000\n)\u0001\u0000\u0000"+
		"\u0000\f-\u0001\u0000\u0000\u0000\u000e\u0010\u0003\u0002\u0001\u0000"+
		"\u000f\u000e\u0001\u0000\u0000\u0000\u0010\u0011\u0001\u0000\u0000\u0000"+
		"\u0011\u000f\u0001\u0000\u0000\u0000\u0011\u0012\u0001\u0000\u0000\u0000"+
		"\u0012\u0013\u0001\u0000\u0000\u0000\u0013\u0014\u0005\u0000\u0000\u0001"+
		"\u0014\u0001\u0001\u0000\u0000\u0000\u0015\u0016\u0005\u0001\u0000\u0000"+
		"\u0016\u0017\u0005\u000f\u0000\u0000\u0017\u0018\u0005\u0002\u0000\u0000"+
		"\u0018\u0019\u0005\u0003\u0000\u0000\u0019\u001a\u0003\u0004\u0002\u0000"+
		"\u001a\u001b\u0005\u0004\u0000\u0000\u001b\u001c\u0003\f\u0006\u0000\u001c"+
		"\u001d\u0005\u0005\u0000\u0000\u001d\u0003\u0001\u0000\u0000\u0000\u001e"+
		"\"\u0003\u0006\u0003\u0000\u001f\"\u0003\b\u0004\u0000 \"\u0003\n\u0005"+
		"\u0000!\u001e\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000!"+
		" \u0001\u0000\u0000\u0000\"\u0005\u0001\u0000\u0000\u0000#$\u0005\u0006"+
		"\u0000\u0000$\u0007\u0001\u0000\u0000\u0000%&\u0005\u0007\u0000\u0000"+
		"&\'\u0005\b\u0000\u0000\'(\u0005\u0010\u0000\u0000(\t\u0001\u0000\u0000"+
		"\u0000)*\u0005\t\u0000\u0000*+\u0005\n\u0000\u0000+,\u0005\u000b\u0000"+
		"\u0000,\u000b\u0001\u0000\u0000\u0000-.\u0007\u0000\u0000\u0000.\r\u0001"+
		"\u0000\u0000\u0000\u0002\u0011!";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}