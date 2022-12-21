import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Jeferson',
      sobrenome: 'Oliveira',
      email: 'jeferson@gmail.com',
      idade: 22,
      peso: 500,
      altura: 3.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
