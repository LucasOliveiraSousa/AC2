import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { TarefaService } from '../services/tarefa-service';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css',
})
export class CadastrarTarefa {
titulo: string = '';
prazo: string = '';

constructor(private tarefaService: TarefaService, private router: Router) {}

cadastrar(){
  if (this.titulo && this.prazo){
    this.tarefaService.adicionar(this.titulo, new Date(this.prazo));
    this.titulo = '';
    this.prazo = '';
    this.router.navigate(['/lista']);
  }
}

}
