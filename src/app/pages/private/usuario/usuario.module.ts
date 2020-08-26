import { SharedModule } from './../../../shared/shared.module';
import { UsuarioService } from './usuario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { RouterModule } from '@angular/router';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaUsuarioComponent, FormularioUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: ListaUsuarioComponent},
      {path: 'novo', component: FormularioUsuarioComponent},
    ]),
    SharedModule,
  ],
})
export class UsuarioModule {
}
