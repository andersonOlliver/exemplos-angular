import { Component, OnInit, OnDestroy } from '@angular/core';
import { Login } from 'src/app/model/login';
import { Router } from '@angular/router';

@Component({
  selector: 'rf-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],

})
export class LoginPageComponent implements OnInit, OnDestroy {
  public login: Login;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.login = new Login();
    // this.login.email = 'teste';
    this.login.senha = 'teste';
  }

  ngOnDestroy(): void {
    console.log('Destruiu pagina de login');
  }

  entrar() {
    console.log(this.login);
    this.navigateInternal();
  }

  private navigateInternal() {
    this.router
      .navigateByUrl('/home')
      .then(() => console.log('navegou para home'))
      .catch((reason) => console.error(reason));
  }
}
