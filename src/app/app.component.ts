import { Login } from './model/login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'projeto-teste';
  public login: Login;

  constructor() {}

  ngOnInit(): void {
    this.login = new Login();
    // this.login.email = 'teste';
    this.login.senha = 'teste';
  }

  entrar() {
    console.log(this.login);
  }
}
