import {Component} from '@angular/core';
import {Disciplina} from './disciplina.model';
import {Professor} from './professor.model';
import {Turma} from './turma.model';
import {Aluno} from './aluno.model';
import {Http, Response, Headers} from '@angular/http';
import {TurmaService} from './turma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  editando = null;
  nome = null;
  descricao = null;
  excluir_ok = false;
  editar_ok = false;
  salvar_ok = false;
  selecionado=null;
  codigo = null;
  novoCadastro = false;

  teste = null;

  idTurmaOb = null;
  disciplinaOb = null;
  professorOb = null;
  alunoOb = null;
  ano = null;
  contaTurma = 5;
  listaAlunos = [];
  quantidade=0;


  constructor(private turmaService: TurmaService){}

  listar()
  {
    this.turmaService.listar().subscribe(dados => this.teste =dados)
  }
  

  disciplinas = [
    new Disciplina(1,'Língua Portuguesa'),
    new Disciplina(5,'Ciências')
  ];

  alunos = [
    new Aluno(1, 'Ricardo',null),
    new Aluno(2, 'Joao',null)
  ];
  professores = [
    new Professor(1, 'Fabiano'),
    new Professor(2, 'Jack')
  ];

  turmas = [
    new Turma (1, new Disciplina(3,'Matematica'),  new Professor(3, 'Madianita'), 2018,null),
    new Turma (2, new Disciplina(4,'Ingles'),  new Professor(4, 'Cristina'), 2018, null)
  ];

  salvarListaAluno()
  {
    this.quantidade=this.listaAlunos.length;
    this.listaAlunos.push(this.alunoOb);
   
  }

  salvar() {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
      this.editando.codigo = this.codigo;
      this.editar_ok = true;
    } else {
      const d = new Turma(this.contaTurma, this.disciplinaOb, this.professorOb, this.ano, this.listaAlunos);
      this.turmas.push(d);
      this.salvar_ok = true;
      this.contaTurma = this.contaTurma+1;
    }
    this.nome = null;
    this.descricao = null;
    this.editando = null;
    this.codigo = null;
  }

  excluir(disciplina) {
    this.redefinir();
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina que está editando');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "'
          + disciplina.nome + '"?')) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
        this.excluir_ok = true;
      }
    }
  }

  editar(disciplina) {
    this.redefinir();
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.codigo = disciplina.codigo;
    this.editando = disciplina;
  }

  cancelar() {
    this.redefinir();
    this.novoCadastro = false;
  }

  redefinir() {
    this.nome = null;
    this.descricao = null;
    this.codigo = null;
    this.editando = null;
    this.excluir_ok = false;
    this.salvar_ok = false;
    this.editar_ok = false;
  }
 selecionar(disciplina) {
    this.selecionado = disciplina;
  }

  removerSelecionada() {
    this.selecionado = null;
  }
  cadastrar(){
      const f = new Disciplina(this.nome, this.descricao);
      this.disciplinas.push(f);
      this.salvar_ok = true;
  }
  criarCadastro(){
  this.novoCadastro = true; 
  }
  ngOnInit(){
    this.listar();
  }

}
