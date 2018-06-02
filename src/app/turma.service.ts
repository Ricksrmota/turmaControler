import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class TurmaService {

 professorUrl = 'http://localhost:3000/turmas'

  constructor(private http: HttpClient) { }


  listar(){
  return this.http.get<any[]>('${this.professorUrl}');
  
  }
}
