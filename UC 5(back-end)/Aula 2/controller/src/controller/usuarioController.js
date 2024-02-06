class UsuarioController {
  /**
   * Criação da classe UsuarioController onde foram criados
   * os metodos especificos e as rotas especificas da classe
   * usuario
   *
   */

  /*Criação da rota usuario com o metodo da classe listar.
   */
  static rotas(app) {
    app.get("/Usuario", UsuarioController.listar);
  }

  /* Criação da rota home com o metodo da classe listarHome
   */
  static rotasHome(app) {
    app.get("/", UsuarioController.listarHome);
  }

  static listar(req, res) {
    res.send(
      "Rota ativada com get e recurso usuário: lista de usuarios deve ser retornada"
    );
  }

  static listarHome(req, res) {
    res.send("Rota ativada para a pagina home");
  }
}

module.exports = UsuarioController;
