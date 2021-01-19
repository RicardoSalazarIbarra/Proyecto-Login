import { VinosService } from './../vinos.service';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Vinos } from 'src/app/shared/modelos/vinos.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  vinos: Vinos = null;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private vinosSvc: VinosService) {
    const navigation = this.router.getCurrentNavigation();
    this.vinos = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    if (typeof this.vinos === 'undefined') {
      this.router.navigate(['lista']);
    }
  }

  onGoToEditar(): void {
    this.navigationExtras.state.value = this.vinos;
    this.router.navigate(['editar'], this.navigationExtras);
  }

  async onGoToEliminar(): Promise<void> {
    try {
      await this.vinosSvc.onEliminarVinos(this.vinos?.id);
      alert('Eliminación Correcta');
      this.onGoRegresarLista();
    } catch (err) {
      console.log(err);
    }
  }

  onGoRegresarLista(): void {
    this.router.navigate(['lista']);
  }


}