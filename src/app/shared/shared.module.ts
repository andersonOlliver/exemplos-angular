import { ReactiveFormsModule } from '@angular/forms';
import { CadastroAbastecimentoComponent } from './components/cadastro-abastecimento/cadastro-abastecimento.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UltimoAbastecimentoComponent } from './components/ultimo-abastecimento/ultimo-abastecimento.component';
import { CpfPipe } from './pipe/cpf.pipe';
import { CpfDirective } from './directive/cpf.directive';

@NgModule({
  declarations: [
    CadastroAbastecimentoComponent,
    CpfPipe,
    CpfDirective,
    UltimoAbastecimentoComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CadastroAbastecimentoComponent,
    CpfPipe,
    CpfDirective,
    UltimoAbastecimentoComponent,
  ],
})
export class SharedModule {}
