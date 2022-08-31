	function validar(formulario) {
	if (formulario.mitexto.value != '') {
		alert('La información es correcta.');
		return true;
	}
	else {
		alert('tienes que escribir tu nombre.');
		return false;
	}
}