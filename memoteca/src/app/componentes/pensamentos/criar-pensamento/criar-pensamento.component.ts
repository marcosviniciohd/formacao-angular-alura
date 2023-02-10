import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {


  pensamento: Pensamento = {
    id: 1,
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: ""
  }

  criarPensamento(){
    alert('Clique disparado');
  }

  cancelar(){
    alert('Pensamento cancelado');
  }

}
