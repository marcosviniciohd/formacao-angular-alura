import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/model/pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from 'src/services/pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  };

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })

  }

  excluirPensamento() {
    if(this.pensamento.id) {
      console.log('O id do pensamento é ' + this.pensamento.id);
      this.pensamentoService.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamento']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/listar-pensamento']);
  }

}
