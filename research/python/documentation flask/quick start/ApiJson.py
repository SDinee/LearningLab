#Se você retornar um dict ou uma list em uma rota, o Flask automaticamente converte em JSON usando jsonify.
#Isso já vem pronto, não precisa chamar jsonify() manualmente (embora você possa, se quiser mais controle).

#Exemplo com dict
@app.route("/me")
def me_api():
    user = get_current_user()
    return {
        "username": user.username,
        "theme": user.theme,
        "image": url_for("user_image", filename=user.image),
    }

# Retorna um objeto JSON com os dados do usuário.

#Exemplo com list
@app.route("/users")
def users_api():
    users = get_all_users()
    return [user.to_json() for user in users]
#Retorna uma lista JSON com vários usuários.

#Para objetos complexos → converta antes com .to_json() ou use uma lib de serialização.
#jsonify() ainda é útil se você quiser configurar headers ou status manualmente.