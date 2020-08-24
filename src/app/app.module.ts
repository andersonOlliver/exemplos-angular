import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { CriaUsuarioPageComponent } from './pages/public/cria-usuario-page/cria-usuario-page.component';
import localeExtraPt from '@angular/common/locales/extra/pt';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePt, 'pt', localeExtraPt);

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    LoginPageComponent,
    CriaUsuarioPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
