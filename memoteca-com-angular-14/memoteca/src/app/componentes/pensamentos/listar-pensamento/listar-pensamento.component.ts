import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    // {
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente Pai',
    //   modelo: 'modelo3',
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo2',
    // },
    // {
    //   conteudo: 'Aprendendo a utilizar o @Input(), com [] property binding',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo3',
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
