import { Component } from '@angular/core';
import { TarefaService } from '../services/tarefa-service';
import { Tarefa } from '../services/tarefa-service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  tarefas$: Observable<Tarefa[]>;

  constructor(private tarefaService: TarefaService) {
    this.tarefas$ = this.tarefaService.listar();
  }

  remover(id: number): void {
    this.tarefaService.remover(id);
  }

  toggleConcluida(id: number): void {
    this.tarefaService.marcarConcluida(id);
  }

  trackById(index: number, item: Tarefa): number {
    return item.id;
  }
}