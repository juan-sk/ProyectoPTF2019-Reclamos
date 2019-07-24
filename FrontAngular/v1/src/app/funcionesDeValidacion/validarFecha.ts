export class ValidarFecha{
    //prueba
    constructor(){
      
    }

    esValido(fecha:string,fechaactual:string){
        if(parseInt(fecha)<parseInt(fechaactual)-10){
            return {result: true, message:"* correo OK"};
        }else{
            return {result: false, message:"* debes ser mayor de 10"};
            } 
        }
     

    }