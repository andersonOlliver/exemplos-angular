import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import { Usuario, ListaUsuario } from './usuario.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private httpClient: HttpClient) {}

  obterUsuarios(): Observable<ListaUsuario[]> {
    return this.httpClient.get<Usuario[]>('assets/usuarios.json').pipe(
      tap((x) => console.log(x)),
      map((usuarios: Usuario[]) => {
        return usuarios.map((u) => {
          return {
            nome: u.nome,
            email: u.email,
            cpf: u.cpf.replace(/[^\d]+/g, ''),
          };
        });
      })
    );
  }


}
