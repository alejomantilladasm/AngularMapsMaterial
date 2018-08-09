import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html'
})
export class MapaComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  marcadores:Marcador[]=[];

  mar1 = new Marcador(51.678418,7.809007);
  

  constructor(private snackBar:MatSnackBar, private dialog: MatDialog) {     
    this.recuperarLocalStorage();
    //this.marcadores.push(this.mar1);
  }

  ngOnInit() {
  }

  agregarMarcador(event:any){
    let cordenadas = event.coords;
    this.marcadores.push(new Marcador(cordenadas.lat,cordenadas.lng));
    this.guardarLocalStorage();
    this.openSnackBar('Marcador Agregado');
  }

  eliminarMarcador(index){
    this.marcadores.splice(index,1);
    this.guardarLocalStorage();
    this.openSnackBar('Marcador Eliminado');
  }
  
  limpiarMarcadores(){    
    this.marcadores=[];
    this.guardarLocalStorage();
  }

  guardarLocalStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }

  recuperarLocalStorage(){
    if(null!=localStorage.getItem('marcadores')){
      this.marcadores=JSON.parse(localStorage.getItem('marcadores'));
    }else{
      this.marcadores=[];
    }
  }


  openSnackBar(message: string) {
    let action: string='Cerrar';
    this.snackBar.open(message, action, {
      duration:2000,
    });
  }

  
  openDialog(marcador:Marcador): void {
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {marcador: marcador}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(!result){
        return;
      }      
      this.guardarLocalStorage();
      this.openSnackBar('Marcador Editado');
    });
  }
  

}
