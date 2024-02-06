class TarefaController {
  /**
   * Criação da classe TarefaController onde foram criados
   * os metodos especificos e as rotas especificas da classe
   * tarefa
   *
   */

  /**
   * 
   * criação da rota tarefa 
   */
  static rotas(app) {
    app.get("/Tarefa", TarefaController.listar);
  }

  /* Criação da rota home com o metodo da classe listarHome
   */
  static rotasHome(app) {
    app.get("/", TarefaController.listarHome);
  }

  //criação do metodo listar da rota tarefa
  static listar(req, res) {
    res.send(
      "Rota ativada com get e recurso tarefa: lista de tarefas deve ser retornada.");
  }

  static listarHome(req, res) {
    res.send("Rota ativada para a pagina home");
  }
}

module.exports = TarefaController;
