// Funcion Constructora del Consultorio

function Consultorio (nombre,paciente) {
   var _nombre = nombre;
   var _paciente = paciente;

   Object.defineProperty(this, "_getNombre", {
       get: function () {
           return _nombre; 
       },
   });
   Object.defineProperty(this, "_setNombre",{
       set: function () {
           _nombre = nombre;
       },
   });
    Object.defineProperty(this, "_getPaciente", {
       get: function () {
           return _paciente; 
       },
   });
    Object.defineProperty(this, "_setPaciente",{
       set: function () {
           _paciente = paciente;
       },
   });
}

// Funcion Constructora de Paciente

function Paciente(nombre,edad,rut,diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico || [];

    Object.defineProperty(this, "_getNombre", {
       get: function () {
           return _nombre; 
       },
    });
    Object.defineProperty(this, "_setNombre",{
       set: function () {
           _nombre = nombre;
       },
    });
    Object.defineProperty(this, "_getEdad", {
       get: function () {
           return _edad; 
       },
    });
    Object.defineProperty(this, "_setEdad",{
       set: function () {
           _edad = edad;
       },
    });
    Object.defineProperty(this, "_getRut", {
       get: function () {
           return _rut; 
       },
    });
    Object.defineProperty(this, "_setRut",{
       set: function () {
           _rut = rut;
       },
    });
    Object.defineProperty(this, "_getDiagnostico", {
       get: function () {
           return _diagnostico; 
       },
    });
    Object.defineProperty(this, "_setDiagnostico",{
       set: function () {
           _diagnostico = diagnostico;
       },
    });
}

//Creacion del método para Consultorio, por medio de getter que nos permita obtener el valor del atributo y 
// setters que permita modificar el valor del atributo desde el exterior.

Consultorio.prototype.getNombre = function (){
    return this._getNombre;
};

Consultorio.prototype.setNombre = function (nombre){
    this._setNombre = nombre;
};

Consultorio.prototype.getPaciente = function (){
    return this._getPaciente;
};

Consultorio.prototype.setNombre = function (paciente){
    this._setPaciente = paciente;
};

//Creacion del método para Paciente, por medio de getter que nos permita obtener el valor del atributo y 
// setters que permita modificar el valor del atributo desde el exterior.

Paciente.prototype.getNombre = function (){
    return this._getNombre;
};

Paciente.prototype._setNombre = function (nombre){
    this._setNombre = nombre;
};

Paciente.prototype.getEdad = function (){
    return this._getEdad;
};

Paciente.prototype._setEdad = function (edad){
    this._setEdad = edad;
};

Paciente.prototype.getRut = function (){
    return this._getRut;
};

Paciente.prototype._setRut = function (rut){
    this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function (){
    return this._getDiagnostico;
};

Paciente.prototype._setDiagnostico = function (diagnostico){
    this._setDiagnostico = diagnostico;
};

// Instanciar los datos de Pacientes
var paciente1 = new Paciente("Ambar", 24, "10852634-8", ["Diagnostico 1", "Diagnostico 1A"]);
var paciente2 = new Paciente("Ramon", 26, "13874963-5", ["Diagnostico 2", "Diagnostico 2A"]);
var paciente3 = new Paciente("Esteban", 12, "23698753-0", ["Diagnostico 3","Diagnostico 3A"]);
var paciente4 = new Paciente("Juan", 46, "12812963-2", ["Diagnostico 4", "Diagnostico 4A"]);
var paciente5 = new Paciente("Macarena", 44, "13847456-3", ["Diagnostico 5", "Diagnostico 5A"]);
var paciente6 = new Paciente("Felipe", 32, "26587569-3", ["Diagnostico 6", "Diagnostico 6A"]);

// Instanciar los datos de Consultorio
var primerConsultorio = new Consultorio("RedSalud", [paciente1, paciente2, paciente3, paciente4, paciente5,paciente6]);

//console.log(primerConsultorio.getPaciente());
//console.log(paciente1.getNombre());

//-------------------------------------------------------------------
// Metodo mostrar todos los datos de los usuarios registrados.
Consultorio.prototype.mostrarTodosLosPacientes = function () {
	this._getPaciente.map((paciente) => {
		console.log("Nombre: " + paciente._getNombre);
		console.log("Edad: " + paciente._getEdad);
		console.log("Rut: " + paciente._getRut);
		console.log("Diagnostico: " + paciente._getDiagnostico);
		console.log("<==================================>");
	});
};
primerConsultorio.mostrarTodosLosPacientes();

// Metodo buscar por nombre y mostrar datos personales.

Consultorio.prototype.filtarPacientePorNombre = function (nombre) {
	this._getPaciente
		.filter((paciente) => paciente._getNombre == nombre)
		.map((paciente) => {
			console.log("Nombre: " + paciente._getNombre);
			console.log("Edad: " + paciente._getEdad);
			console.log("Rut: " + paciente._getRut);
			console.log("Diagnostico: " + paciente._getDiagnostico);
			console.log("<=================================>");
		});
};

primerConsultorio.filtarPacientePorNombre("Juan");

// Bonus: Mostrar todo en el HTML + interaccion con el DOM

function tablainformativa(array) {
	let filadeTextosGenericos = `
        <tr class="text-center p-2">
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Rut</th>
            <th scope="col">Diagnostico</th>
        </tr>`;
	for (let i = 0; i < array.length; i++) {
		filadeTextosGenericos += `
        <tr class="text-center">
            <td>${[i + 1]}</td>
            <td>${array[i]._getNombre}</td>
            <td>${array[i]._getEdad}</td>
            <td>${array[i]._getRut}</td>
            <td>${array[i]._getDiagnostico}</td>
        </tr>`;
	}
	document.querySelector(".tablainformativa").innerHTML = filadeTextosGenericos;
}
tablainformativa(primerConsultorio._getPaciente);

let search = document.querySelector("#search");

search.addEventListener("click", (e) => {
	e.preventDefault();
	let patientName = document.querySelector("#nombrePaciente").value;
	let filadeTextosGenericos = `
    <tr class="text-center">
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Edad</th>
        <th scope="col">Rut</th>
        <th scope="col">Diagnostico</th>
    </tr>`;
	let pacienteFiltrado = primerConsultorio._getPaciente.filter((paciente) => paciente._getNombre == patientName);
	for (let i = 0; i < pacienteFiltrado.length; i++) {
		filadeTextosGenericos += `
            <tr class="text-center">
                <td>${[i + 1]}</td>
                <td>${pacienteFiltrado[i]._getNombre}</td>
                <td>${pacienteFiltrado[i]._getEdad}</td>
                <td>${pacienteFiltrado[i]._getRut}</td>
                <td>${pacienteFiltrado[i]._getDiagnostico}</td>
            </tr>`;
	}
	document.querySelector(".tabladeresultado").innerHTML = filadeTextosGenericos;
});

let clean = document.querySelector("#clean");
clean.addEventListener("click", (e) => {
	e.preventDefault();
	$(".tabladeresultado").empty();
});