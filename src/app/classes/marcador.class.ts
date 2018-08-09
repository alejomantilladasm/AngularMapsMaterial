export class Marcador{

    public titulo:string = 'Sin Título';
    public descripcion:string = 'Sin Descripción';

    public lat:number;
    public lng:number;

    constructor(lat:number, lng:number){
        this.lat=lat;
        this.lng=lng;
    }

    setTitulo(titulo:string){
        this.titulo=titulo;
    }
    setDescripcion(descripcion:string){
        this.descripcion=descripcion;
    }

}