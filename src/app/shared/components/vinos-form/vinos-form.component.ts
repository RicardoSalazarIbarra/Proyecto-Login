import { VinosService } from './../../../paginas/vinos/vinos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vinos } from '../../modelos/vinos.interface';

@Component({
  selector: 'app-vinos-form',
  templateUrl: './vinos-form.component.html',
  styleUrls: ['./vinos-form.component.scss']
})
export class VinosFormComponent implements OnInit {

  vinos: Vinos;
  vinosForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private vinossSvc: VinosService) {
    const navigation = this.router.getCurrentNavigation();
    this.vinos = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.vinos === 'undefined') {
      this.router.navigate(['agregar']);
    } else {
      this.vinosForm.patchValue(this.vinos);
    }
  }

  onGuardar(): void {
    console.log('Saved', this.vinosForm.value);
    if (this.vinosForm.valid) {
      const vinos = this.vinosForm.value;
      const vinosId = this.vinos?.id || null;
      this.vinossSvc.onGuardarVinos(vinos, vinosId);
      this.vinosForm.reset();
    }

  }

  onGoRegresarLista(): void {
    this.router.navigate(['lista']);
  }

  isValidField(field: string): string {
    const validatedField = this.vinosForm.get(field);
    return (!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
  }

  private initForm(): void {
    this.vinosForm = this.fb.group({
      clasificacion: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      cosecha: ['', [Validators.required]],
      sabor: ['', [Validators.required]],
      aroma: ['', [Validators.required]],
    });
  }

}