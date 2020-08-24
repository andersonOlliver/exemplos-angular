import { CriaUsuarioPageComponent } from './pages/public/cria-usuario-page/cria-usuario-page.component';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'cria-usuario',
        component: CriaUsuarioPageComponent,
      },
      { path: 'home', loadChildren: () => import('./pages/private/home/home.module').then(m => m.HomeModule) },
      { path: 'usuario', loadChildren: () => import('./pages/private/usuario/usuario.module').then(m => m.UsuarioModule) },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
