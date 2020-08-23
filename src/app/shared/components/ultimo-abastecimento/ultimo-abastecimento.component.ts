import { AbastecimentoService } from './../../services/abastecimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-ultimo-abastecimento',
  templateUrl: './ultimo-abastecimento.component.html',
  styleUrls: ['./ultimo-abastecimento.component.scss']
})
export class UltimoAbastecimentoComponent implements OnInit {

  constructor(public abastecimentoService: AbastecimentoService) { }

  ngOnInit(): void {
  }

}
