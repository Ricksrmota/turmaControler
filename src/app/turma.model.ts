import {Professor} from './professor.model';
import {Aluno} from './aluno.model';
import {Disciplina} from './disciplina.model';
export class Turma{

  idTurma: number;
  disciplinaID: Disciplina;
  idProfessorT: Professor;
  listaAluno: Aluno[];
  ano: number;


  constructor(idTurma: number, disciplinaID: Disciplina, idProfessorT: Professor, ano: number, listaAluno?: Aluno[])
  {
    this.idTurma = idTurma;
    this.disciplinaID = disciplinaID;
    this.idProfessorT = idProfessorT;
    this.ano = ano;
    this.listaAluno = this.listaAluno;
  }
 }
