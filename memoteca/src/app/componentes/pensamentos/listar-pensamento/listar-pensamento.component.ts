import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam alias blanditiis iste tempore ex et est dolorem quasi iure, quibusdam delectus magnam, unde esse ad obcaecati illo voluptate modi',
      autoria: '',
      modelo: 'modelo1'
    }
  ];
}
