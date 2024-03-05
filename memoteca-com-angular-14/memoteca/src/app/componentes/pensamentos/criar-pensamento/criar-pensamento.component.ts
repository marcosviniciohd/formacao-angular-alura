import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/model/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Apredendo Angular',
    autoria: 'Dev',
    modelo: 'Modelo 1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  removerPensamento() {
    alert('Pensamento removido com sucesso!');
  }

 }
