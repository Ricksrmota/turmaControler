import {Turma} from './turma.model';
export class Aluno{

  idAluno: number;
  nome: string;
  turma: Turma;


  constructor(idAluno: number, nome: string, turma?: Turma)
  {
    this.idAluno = idAluno;
    this.nome = nome;
    this.turma = turma;
  }
 }
