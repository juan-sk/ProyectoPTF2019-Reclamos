export class ValidarEmail{

    regexp: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    
    constructor(){

    }

checkEmail(correo:string) {
    if (this.regexp.test(correo)){
        return {result: true, message : "La dirección de email es correcta."};
    }

}
}