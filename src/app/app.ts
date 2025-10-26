import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { Certificado } from "./pages/certificado/certificado";
import { Navbar } from "./_components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimaryButton, SecondaryButton, ItemCertificado, BaseUi, Certificados, Certificado, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = true;
}
