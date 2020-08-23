import { Abastecimento } from './../../../model/abastecimento';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'rf-cadastro-abastecimento',
  templateUrl: './cadastro-abastecimento.component.html',
  styleUrls: ['./cadastro-abastecimento.component.scss'],
})
export class CadastroAbastecimentoComponent implements OnInit {
  @Input() abastecimento: any;
  @Input() combustivel: string;
  @Input() valor: number;

  @Output() aoSalvar = new EventEmitter<Abastecimento>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.construirFormulario();

    // Atualizando valores do formulario
    this.form.patchValue(this.abastecimento);

    // Atualizando parcialmente os valores
    this.form.patchValue({
      valor: 80,
    });
  }

  criar(): void {
    console.log(this.form);
    const abastecimento = Object.assign({}, this.form.value) as Abastecimento;
    this.aoSalvar.emit(abastecimento);
  }

  construirFormulario(): void {
    this.form = this.fb.group({
      combustivel: [''],
      valor: [0],
    });
  }
}
