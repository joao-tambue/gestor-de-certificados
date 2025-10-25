import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem () {
    console.log('Meu componente navbar inicializado ( dentro de uma função)')
  }
}
