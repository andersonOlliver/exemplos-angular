import { ReactiveFormsModule } from '@angular/forms';
import { CadastroAbastecimentoComponent } from './components/cadastro-abastecimento/cadastro-abastecimento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimoAbastecimentoComponent } from './components/ultimo-abastecimento/ultimo-abastecimento.component';

@NgModule({
  declarations: [CadastroAbastecimentoComponent, UltimoAbastecimentoComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CadastroAbastecimentoComponent, UltimoAbastecimentoComponent],
})
export class SharedModule {}
