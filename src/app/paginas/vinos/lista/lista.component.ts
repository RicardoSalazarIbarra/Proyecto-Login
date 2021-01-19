import { VinosService } from './../vinos.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  vinos$ = this.vinosSvc.vinos;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router, private vinosSvc: VinosService) { }

  ngOnInit(): void {
  }

  onGoToEditar(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['editar'], this.navigationExtras);
  }

  onGoToVer(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['detalles'], this.navigationExtras);
  }

  async onGoToEliminar(empId: string): Promise<void> {
    try {
      await this.vinosSvc.onEliminarVinos(empId);
      alert('Eliminación Correcta');
    } catch (err) {
      console.log(err);
    }
  }
}