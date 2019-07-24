export class ValidarContrasena{
    //prueba
    constructor(){
      
    }
    esValido(pass,pass2) {
        if (pass == pass2){
            return {result: true, message:"* correo OK"}; 
        } else {
            return {result: false, message:"* ambas contraseñas deben ser iguales"}; 
        }
    }
}  