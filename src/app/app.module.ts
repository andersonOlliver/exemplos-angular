import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { CriaUsuarioPageComponent } from './pages/public/cria-usuario-page/cria-usuario-page.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    LoginPageComponent,
    CriaUsuarioPageComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
