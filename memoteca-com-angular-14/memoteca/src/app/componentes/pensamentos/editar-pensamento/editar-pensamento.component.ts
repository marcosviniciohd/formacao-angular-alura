import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from 'src/model/pensamento';
import { PensamentoService } from 'src/services/pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

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
    });
  }

  editarPensamento(){
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar-pensamento']);
    })
  }

  cancelar(){
    this.router.navigate(['/listar-pensamento']);

  }

}
