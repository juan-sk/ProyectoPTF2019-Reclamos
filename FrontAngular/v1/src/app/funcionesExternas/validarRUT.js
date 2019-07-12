
class ValidarRut{
    
    constructor(){
        this.msg="hola";
    }
    esValido(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Gui�n
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y D�gito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv
    
    // Si no cumple con el m�nimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular D�gito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada d�gito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el M�ltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar M�ltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular D�gito Verificador en base al M�dulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su D�gito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inv�lido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es v�lido)
    rut.setCustomValidity('');
}
}
exports.default = ValidarRut;
