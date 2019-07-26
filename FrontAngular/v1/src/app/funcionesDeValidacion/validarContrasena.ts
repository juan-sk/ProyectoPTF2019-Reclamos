export class ValidarContrasena{
    //prueba
    constructor(){
      
    }
    //metodo esValido recive dentro 2 parametros de tipo string y los compara 
    //de esta manera valida si ambas contraseñas son iguales
    //el mensaje pass OK a pesar que es un retorno no llega a mostrarse en pantalla

    esValido(pass,pass2) {
        if (pass == pass2){
            return {result: true, message:"* pass OK"}; 
        } else {
            return {result: false, message:"* ambas contraseñas deben ser iguales"}; 
        }
    }
}  