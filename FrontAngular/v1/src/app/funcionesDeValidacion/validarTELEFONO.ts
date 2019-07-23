
export class ValidarTelefono{
    
    constructor(){
      
    }
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