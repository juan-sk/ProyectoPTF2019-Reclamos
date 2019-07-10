export class RS{
    id_reclamo:number;
    id_empresa:number;
    fecha_reclamo:Date;
    detalle_reclamo:string;
    usuario_reclamo:number;
    id_empleado:number;
    estado:string;
    tipo:string;
    
    constructor(){
        this.id_reclamo=0;
        this.id_empresa=0;
        this.fecha_reclamo=new Date();
        this.detalle_reclamo="";
        this.usuario_reclamo=0;
        this.id_empleado=0;
        this.estado="";
        this.tipo="";
    }
  
    
}