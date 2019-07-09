export class UsuarioRegistrado{
    id_rut_usuario_r:number;
    nombre_usuario_r:string;
    apellido_usuario_r:string;
    correo_usuario_r:string;
    genero_usuario_r:string;
    password_usuario_r:string;
    fecha_nacimiento_usuario_r:Date;
    telefono_usuario_r:number;
    
    constructor(){
        this.id_rut_usuario_r;
        this.nombre_usuario_r="";
        this.apellido_usuario_r="";
        this.correo_usuario_r="";
        this.genero_usuario_r="";
        this.password_usuario_r="";
        this.fecha_nacimiento_usuario_r=new Date();
        this.telefono_usuario_r=0;
    }
  
    
}