
function validarCampos(){
    var preguntarUsuario = document.getElementById("usuario").value;
    var preguntarContrasena = document.getElementById("password").value;

    //expreciones regulares
    var correoValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if ( correoValido.test(preguntarUsuario) && preguntarContrasena=="1234" ) {
        //alert("valido correctamente sus datos");
        window.location="index.html";
        
    } else if( preguntarContrasena != "1234" ){
        alert("Correo valido, contrasenha incorrecta");
    } else {
        alert("Correo y contrasenha invalidos");
    }
}
