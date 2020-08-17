import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Construiu a página Home');
  }
  ngOnDestroy(): void {
    console.log('Destruiu a página');
  }

  ngOnInit(): void {
    console.log('Iniciou a página Home');
  }

}
