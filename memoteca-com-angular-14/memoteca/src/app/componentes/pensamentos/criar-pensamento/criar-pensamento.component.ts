import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from 'src/model/pensamento';
import { PensamentoService } from 'src/services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.pensamentoService.criarPensamento(this.pensamento).subscribe(() => this.router.navigate(['/listar-pensamento']));
  }

  removerPensamento() {
    this.router.navigate(['/listar-pensamento']);
  }

 }
