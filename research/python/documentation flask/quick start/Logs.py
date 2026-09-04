@app.route('/')
def index():
    app.logger.debug('A value for debugging')  # detalhe técnico
    app.logger.warning('A warning occurred (%d apples)', 42)  # aviso
    app.logger.error('An error occurred')  # erro
    return "Check logs!"

#Debug → entender o que está acontecendo no código.
#Warning → identificar situações estranhas que não quebram o app.
#Error → registrar falhas para investigar depois.
#Logs ajudam muito em produção, porque você não precisa imprimir (print) e podem ser integrados com sistemas de monitoramento.