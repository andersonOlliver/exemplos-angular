import { ReactiveFormsModule } from '@angular/forms';
import { CadastroAbastecimentoComponent } from './components/cadastro-abastecimento/cadastro-abastecimento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimoAbastecimentoComponent } from './components/ultimo-abastecimento/ultimo-abastecimento.component';
import { CpfPipe } from './pipe/cpf.pipe';

@NgModule({
  declarations: [
    CadastroAbastecimentoComponent,
    CpfPipe,
    UltimoAbastecimentoComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CadastroAbastecimentoComponent,
    CpfPipe,
    UltimoAbastecimentoComponent,
  ],
})
export class SharedModule {}
