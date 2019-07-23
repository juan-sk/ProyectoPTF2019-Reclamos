export class UsuarioRegistrado{
    rutUsuario:number;
    nombreUsuario:string;
    apellidoUsuario:string;
    emailUsuario:string;
    passUsuario:string;
    fechaNacUsuario:Date;
    fonoUsuario:number;
    generoUsuario:string;
    
    constructor(){

        this.rutUsuario=0;
        this.nombreUsuario="";
        this.apellidoUsuario="";
        this.emailUsuario="";
        this.passUsuario="";
        this.fechaNacUsuario=new Date();
        this.fonoUsuario=0;
        this.generoUsuario="";
    }
    
}