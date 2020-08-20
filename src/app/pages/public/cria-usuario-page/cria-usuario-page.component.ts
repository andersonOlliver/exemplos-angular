import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './cria-usuario-page.component.html',
  styleUrls: ['./cria-usuario-page.component.scss'],
})
export class CriaUsuarioPageComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.construirFormulario();

    // const emailCtrl = this.fb.control('x');
  }

  construirFormulario(usuario?: any) {
    this.form = this.fb.group({
      email: [
        usuario?.email || '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(10),
          Validators.maxLength(100),
        ]),
      ],
      password: [
        usuario?.password || '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ]),
      ],
      confirmPassword: [
        usuario?.confirmPassword || '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ]),
      ],
    });
  }

  criar() {
    console.log(this.form);
    console.log(this.form.value);
  }

  estaInvalido(controle: string) {
    if (controle) {
      return this.form.get(controle).touched && this.form.get(controle).invalid;
    }
  }
}
