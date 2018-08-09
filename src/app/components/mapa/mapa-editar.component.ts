import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Marcador } from '../../classes/marcador.class';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styles: []
})
export class MapaEditarComponent implements OnInit {

  forma:FormGroup;

  marcador:Marcador;

  constructor(public dialogRef: MatDialogRef<MapaEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder) {
      
    this.marcador=data.marcador;
    
    this.forma=fb.group({
        'titulo':this.marcador.titulo,
        'descripcion':this.marcador.descripcion
      });  
   }

  ngOnInit() {
  }

  editar(){    
    this.marcador.titulo=this.forma.controls['titulo'].value;
    this.marcador.descripcion=this.forma.controls['descripcion'].value;
    this.dialogRef.close(this.marcador);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
