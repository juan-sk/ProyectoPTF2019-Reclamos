/*----------------------*/
/* VALIDACION DE CORREO */
/*----------------------*/
export class ValidarCorreos{
    
    constructor(){
      
    }
    //metodo esValido recive dentro 2 parametros de tipo string y los compara 
    //de esta manera valida si ambos correos son iguales
    //el mensaje correo OK a pesar que es un retorno no llega a mostrarse en pantalla
    esValido(correo,correo2) {
        if (correo == correo2){
            return {result: true, message:"* correo OK"}; 
        } else {
            return {result: false, message:"* ambos correos deben ser iguales"}; 
        }
    }
}  