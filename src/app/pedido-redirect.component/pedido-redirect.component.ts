import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nexo-pedido-redirect.component',
  imports: [],
  templateUrl: './pedido-redirect.component.html',
  styleUrl: './pedido-redirect.component.scss',
})
export class PedidoRedirectComponent implements OnInit {
  ngOnInit(): void {
    this.redirectUser();
  }

  private redirectUser(): void {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Si es Android, enviarlo a la Play Store
    if (/android/i.test(userAgent)) {
      window.location.replace("https://play.google.com/store/apps/details?id=pe.com.xpress");
    }
    // Si es iOS, enviarlo a la App Store
    else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.replace("https://apps.apple.com/app/id6763130235");
    }
    // Si es PC, redirigirlo a la página principal de la landing page
    else {
      window.location.replace("https://timkidelivery.com");
    }
  }
}
