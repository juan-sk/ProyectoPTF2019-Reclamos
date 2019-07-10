export class UsuarioRegistrado{
    rutusuario:number;
    nombreusuario:string;
    apellidousuario:string;
    emailusuario:string;
    passusuario:string;
    fechanacusuario:Date;
    fonousuario:number;
    generousuario:string;
    
    constructor(){
        this.rutusuario;
        this.nombreusuario="";
        this.apellidousuario="";
        this.emailusuario="";
        this.passusuario="";
        this.fechanacusuario=new Date();
        this.fonousuario=0;
        this.generousuario="";
    }
  
    
}