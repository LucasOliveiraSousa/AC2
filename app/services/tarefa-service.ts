import { Injectable } from '@angular/core';

export interface Tarefa {

id: number;
titulo: string;
prazo: Date;
concluida: boolean;
removida: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

private tarefas: Tarefa[] = [];
private proximoId = 1;

listar(): Tarefa[]{
  return this.tarefas;

}

adicionar(titulo: string, prazo: Date): void{
  const tarefa = Tarefa = {
    id: this.proximoId++,
    titulo,
    prazo,
    concluida: false,
    removida: false
  };
  this.tarefas.push(tarefa);
}

remover(id: number): void{
  const tarefa = this.tarefas.find(t => t.id === id);
  if (tarefa) tarefa.concluida = true;
}

marcarConcluida(id: number): void{

const tarefa = this.tarefas.find(t => t.id === id);
if (tarefa) tarefa.concluida = true;
}

contarTotal(): number{
  return this.tarefas.filter(t => !t.removida).length;
}

contarConcluidas(): number{
  return this.tarefas.filter(t => t.concluida && !t.removida).length;
}

contarPendentes(): number{
  return this.tarefas.filter(t => !t.concluida && !t.removida).length;
}

}
