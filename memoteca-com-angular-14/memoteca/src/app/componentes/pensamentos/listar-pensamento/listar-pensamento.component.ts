import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/model/pensamento';
import { PensamentoService } from 'src/services/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listar().subscribe((listaPensamentos) => { this.listaPensamentos = listaPensamentos;
      console.log(this.listaPensamentos);
      console.log(listaPensamentos.length);
    });
  }

}
