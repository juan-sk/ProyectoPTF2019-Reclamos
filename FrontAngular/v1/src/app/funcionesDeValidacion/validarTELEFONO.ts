
export class ValidarTelefono{
    
    constructor(){
      
	}
	//metodo checkTelefono recibe un string que es el telefono infresado
	//valida que la cantidad de caracteres sea correcta
	//osea que los dijitos son 8
	//el mensaje * No puede superar los 9 dijitos se volvio insesesario por validaciones
	//directas echas en html
	checkTelefono(telefono) {
	if (telefono.length < 9)/* && telefono.length > 9)*/ {
		return {result: false, message:"* Telefono incompleto"};
	  }	
	  if (telefono.length > 9)/* && telefono.length > 9)*/ {
		return {result: false, message:"* No puede superar los 9 dijitos"};
	  }	
	
	  return {result: true, message:"Telefono OK"};
	}
	
	// funciona tiranosaurio
}