export class ValidarCorreos{
    //prueba
    constructor(){
      
    }
    esValido(correo,correo2) {
        if (correo == correo2){
            return {result: true, message:"* correo OK"}; 
        } else {
            return {result: false, message:"* ambos correos deben ser iguales"}; 
        }
    }
}  