import { AbastecimentoService } from './../../../shared/services/abastecimento.service';
import { Abastecimento } from './../../../model/abastecimento';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  abastecimento = {
    combustivel: 'Gasolina',
    valor: 50.0,
  };

  constructor(private abastecimentoService: AbastecimentoService) {
    console.log('Construiu a página Home');
  }
  ngOnDestroy(): void {
    console.log('Destruiu a página');
  }

  ngOnInit(): void {
    console.log('Iniciou a página Home');
  }

  aoSalvarAbastecimento($event: Abastecimento): void {
    console.log($event);
    this.abastecimentoService.atualizaValor($event);
  }
}
