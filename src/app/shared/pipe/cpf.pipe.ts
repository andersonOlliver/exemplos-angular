import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
})
export class CpfPipe implements PipeTransform {
  transform(value: string, tipo: TipoPipe, ...args: any[]): string {
    console.log(value);
    console.log(tipo);

    if (tipo === TipoPipe.CPF) {
      return this.converteCpf(value);
    }
    return this.converteCnpj(value);
  }

  private converteCpf(numero: string) {
    const tamanho = numero.length;

    if (tamanho < 4) {
      return numero;
    } else if (tamanho < 7) {
      return numero.replace(/(\d{3})(\d+)/, ' $1.$2');
    } else if (tamanho < 10) {
      return numero.replace(/(\d{3})(\d{3})(\d+)/, ' $1.$2.$3');
    } else {
      return numero.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, ' $1.$2.$3-$4');
    }
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
