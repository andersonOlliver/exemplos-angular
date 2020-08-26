export function converteCpf(numeroPuro: string) {
  const numero = numeroPuro.replace('.', '');
  const tamanho = numero.length;

  if (tamanho < 4) {
    return numero;
  } else if (tamanho < 7) {
    return numero.replace(/(\d{3})(\d+)/, '$1.$2');
  } else if (tamanho < 10) {
    return numero.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
  } else {
    return numero.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
  }
}
