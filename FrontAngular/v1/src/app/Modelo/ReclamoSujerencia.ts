export class ReclamoSujerencia{
    idReclamoSujerencia:number;
    idEmpresa:number;
    fechaReclamoSujerencia:Date;
    detalleReclamoSujerencia:string;
    usuarioReclamoSujerencia:number;
    idEmpleado:number;
    estado:string;
    tipo:string;
    
    constructor(){
        this.idReclamoSujerencia=0;
        this.idEmpresa=0;
        this.fechaReclamoSujerencia=new Date();
        this.detalleReclamoSujerencia="";
        this.usuarioReclamoSujerencia=0;
        this.idEmpleado=0;
        this.estado="";
        this.tipo="";
    }
  
    
}