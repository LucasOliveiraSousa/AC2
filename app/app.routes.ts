import { Routes } from '@angular/router';
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa';
import { ListaTarefas } from './lista-tarefas/lista-tarefas';

export const routes: Routes = [   
    {path:'cadastrar', component: CadastrarTarefa},
    {path: 'lista', component: ListaTarefas}
];
