import { Pipe, PipeTransform } from '@angular/core';
import { converteCpf } from '../functions';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: string, tipo: TipoPipe, ...args: any[]): string {
    console.log(value);
    console.log(tipo);

    if (tipo === TipoPipe.CPF) {
      return converteCpf(value);
    }
    return this.converteCnpj(value);
  }



  private converteCnpj(numero: string) {
    const tamanho = numero.length;

    if (tamanho < 13) {
      return numero.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, ' $1.$2.$3/$4');
    } else {
      return numero.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/,
        ' $1.$2.$3/$4-$5'
      );
    }
  }
}

export enum TipoPipe {
  CPF = 'CPF',
  CNPJ = 'CNPJ',
}
