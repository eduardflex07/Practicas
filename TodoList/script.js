var items = document.getElementById('add-list');
var pendientes = ["Comer", "Leer 30 minutos", "Tender la cama"]

function addListaPendientes() {
    var lista = document.getElementById('add-list');
    var val = lista.value;
    if (val == "") {
        document.getElementById('name-error').style.display = 'block';
    } else {
        pendientes.push(val.trim());
        lista.value = '';
        mostrarLisatPendientes();
    }

}

function mostrarLisatPendientesOnloadPage() {
    var listaPendiente = '';
    if (pendientes.length > 0) {
        for (var i = 0; i < pendientes.length; i++) {
            listaPendiente += "<li class='list-group-item'><input class='form-check-input' type='radio' name='radio-button'>" + " " + pendientes[i] + " " + "<button class='btn btn-danger' onclick='removerListaPendientes(" + i + ")'>X</button></li>";
        }
    }

    document.getElementById('listar').innerHTML = listaPendiente;
}

function mostrarLisatPendientes() {
    document.getElementById('name-error').style.display = 'none';
    var listaPendiente = '';
    if (pendientes.length > 0) {
        for (var i = 0; i < pendientes.length; i++) {
            listaPendiente += "<li class='list-group-item'><input class='form-check-input' type='radio' name='radio-button'>" + " " + pendientes[i] + " " + "<button class='btn btn-danger' onclick='removerListaPendientes(" + i + ")'>X</button></li>";
        }
    }

    document.getElementById('listar').innerHTML = listaPendiente;
}

function removerListaPendientes(lista) {
    pendientes.splice(lista, 1);
    mostrarLisatPendientes();
}

document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelector('#add-button')
        .addEventListener('click', addListaPendientes);
});