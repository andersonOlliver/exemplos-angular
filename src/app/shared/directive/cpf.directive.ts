import { Directive, Input, AfterViewInit, HostListener } from '@angular/core';
import { converteCpf } from '../functions';
import { NgControl, FormControl } from '@angular/forms';

@Directive({
  selector: '[rfCpf]',
})
export class CpfDirective implements AfterViewInit {
  @Input() rfCpf: string;

  constructor(private ngControl: NgControl) {}

  ngAfterViewInit(): void {
    console.log(this.rfCpf);
  }

  @HostListener('keyup', ['$event'])
  escultaDigitos($event: KeyboardEvent) {
    const elem = $event.target as any;
    const value = elem.value;

    console.log(value);

    const valorFormatado = converteCpf(value);

    console.log(valorFormatado);

    (this.ngControl.control as FormControl).setValue(valorFormatado, {
      emitEvent: false,
    });
  }
}
