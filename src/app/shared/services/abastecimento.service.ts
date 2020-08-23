import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Abastecimento } from 'src/app/model/abastecimento';

@Injectable({
  providedIn: 'root',
})
export class AbastecimentoService {
  ultimoAbastecimento = { combustivel: 'Alcool', valor: 10 };

  ultimoAbastecimentoSubject = new BehaviorSubject<Abastecimento>(
    this.ultimoAbastecimento
  );

  constructor() {}

  get ultimoAbastecimento$(): Observable<Abastecimento> {
    return this.ultimoAbastecimentoSubject.asObservable();
  }

  atualizaValor(abastecimento: Abastecimento): void {
    this.ultimoAbastecimentoSubject.next(abastecimento);
  }
}
