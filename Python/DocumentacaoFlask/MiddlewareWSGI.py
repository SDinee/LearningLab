from werkzeug.middleware.proxy_fix import ProxyFix

app.wsgi_app = ProxyFix(app.wsgi_app)

# Isso é útil quando você roda o Flask atrás de um proxy reverso (como Nginx ou HAProxy).
#O ProxyFix ajusta os cabeçalhos X-Forwarded-For, X-Forwarded-Proto, etc., para que o Flask saiba o IP e protocolo corretos do cliente.
#Ao embrulhar só app.wsgi_app, você mantém o app intacto e ainda pode configurá-lo normalmente.