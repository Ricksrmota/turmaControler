import {Professor} from './professor.model';
export class Disciplina {
  nome: string;
  descricao: string;
  professor: Professor;
  codigo: number;

  constructor(codigo: number, nome: string, descricao?: string, professor?: Professor) {
    this.nome = nome;
    this.descricao = descricao;
    this.professor = professor;
    this.codigo = codigo;
  }
}
