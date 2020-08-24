import { ListaUsuario } from './../usuario.model';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { TipoPipe } from 'src/app/shared/pipe/cpf.pipe';

@Component({
  selector: 'rf-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss'],
})
export class ListaUsuarioComponent implements OnInit {
  usuarios: ListaUsuario[];
  tiposPipe = TipoPipe;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService
      .obterUsuarios()

      .subscribe(
        (usuarios) => {
          console.table(usuarios);
          this.usuarios = usuarios;
        },
        (error) => console.error(error)
      );
  }
}
