/*---------------------*/
/* VALIDACION DE FECHA */
/*---------------------*/
export class ValidarFecha{
    //prueba
    constructor(){
      
    }
    //metodo esValido recibe dentro 2 parametros de tipo string los cambia a int
    //y luego los compara y a la fecha actual le resta 10 años para que asi no importa
    //cuando se ejecute la plataforma restara 10 años para poder ingresar la fecha
    esValido(fecha:string,fechaactual:string){
        
        if(parseInt(fecha)<parseInt(fechaactual)-10){
            return {result: true, message:"* correo OK"};
        }else{
            return {result: false, message:"* debes ser mayor de 10"};
            } 
        }
     

    }