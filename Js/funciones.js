class Usuario{
    constructor(user, name, code, cel, pass, tp ){
        this.usuario = user;
        this.nombre = name;
        this.dpi = code;
        this.telefono = cel;
        this.contraseña = pass;
        this.tipo = tp;
        this.siguiente = null;
    }
    
    texto(){
        var a = " "+ this.usuario + " " + this.nombre + " " + this.dpi + " " + this.telefono + " " + this.contraseña + " " + this.tipo
        return a
    }
}

class listaUsuarios{

    constructor(){
        this.primero = null;
        this.ultimo = null;

    }

    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo
            this.ultimo = nuevo
            return;
        }else{
            var temp = this.ultimo
            this.ultimo = nuevo
            temp.siguiente = nuevo
            return;
        }
    }

    eliminar(usuario){
        if(this.primero = null){
            alert("No hay elementos para borrar");
        }else{
            var temp = this.primero;
            while (temp.siguiente != null){
                if(temp.siguiente.usuario = usuario){
                    var temp2 = temp.siguiente.siguiente;
                    temp.siguiente.siguiente = null;
                    temp.siguiente = temp2;
                    alert("Usuario eliminado");
                    return;
                }
                temp = temp.siguiente;
            }
            alert("Usuario no encontrado");
        }
    }

    login(user, pass, tipo){
        if(user == "" || pass == ""){
            return false;
        }
        if(this.primero == null){
            return false;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.usuario == user && pass == temp.contraseña){
                    if(temp.tipo == tipo){
                        console.log("simon")
                        return true;
                    }else{
                        return false;
                    }
                }
                temp = temp.siguiente;
            }
            return false;
        }
    }

    mostrarTodo(){
        var a = "";
        let temp = this.primero;
        while(temp != null){
            a += temp.texto();

            a += "\n\n";
            temp = temp.siguiente;
        }
        return a;
    }


}

class Artista{
    constructor(name, age, contry){
        this.nombre = name
        this.edad = age
        this.lugar = contry
        this.cabezaCancion = null
        this.siguiente = null
        this.anterior = null
    }

    texto(){
        var a = this.nombre + " " + this.edad + " " + this.lugar;
        return a;
    }
}

class Cancion{
    constructor(artista, name, duration, gender){
        this.artista = artista
        this.nombre = name
        this.tiempo = duration
        this.genero = gender
        this.siguiente = null
        this.anterior = null
    }

    texto(){
        var a = this.artista + " " + this.nombre + " " + this.tiempo + " " + this.genero;
        return a;
    }
}

class Artistas{
    constructor(){
        this.primero = null;
        
    }
    //se puede repetir Artista?
    agregarArtista(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
        }else{
            //verificar que no existe
            var ok = true;
            var ver = this.primero;
            while(ver != null){
                if(ver.nombre == nuevo.nombre){
                    ok = false;
                }
                ver = ver.siguiente;
            }
            if(ok == true){
                var temp = this.primero;
                while(temp.siguiente!=null){
                    temp = temp.siguiente;
                }
                temp.siguiente = nuevo;
                nuevo.anterior = temp;
            }
            return;
        }
    }

    agregarCancion(nombreArtista, cancion){
        var temp = this.primero;
        while(temp!=null){
            if(temp.nombre == nombreArtista){
                var tempCancion = temp.cabezaCancion;
                if(tempCancion == null){
                    temp.cabezaCancion = cancion;
                }else{
                    while(tempCancion.siguiente != null){
                        tempCancion = tempCancion.siguiente;
                    }
                    tempCancion.siguiente = cancion;
                    cancion.anterior = tempCancion;
                }
                console.log("agregado");
                return;
            }
            temp = temp.siguiente;
        }
        console.log("Artista no encontrado");
    }

    mostrarTodo(){
        var a = "";
        var artActual = this.primero;
        while(artActual != null){
            console.log(artActual.nombre)
            console.log("")
            var canActual = artActual.cabezaCancion;
            while(canActual != null){
                console.log(canActual.texto());
                canActual = canActual.siguiente;
            }
            artActual = artActual.siguiente;
            console.log("");
            console.log("");
        }
    }
}

class  NodoMatriz {
    constructor(valor, x, y, artista) {
        this.valor = valor;//Valor con el que vamos a comparar
        this.x = x;//posicion en la cabecera en horizontal
        this.y = y;//posicion en la cabecera en vertical
        this.siguiente = null;//enlace para la cabecera en x
        this.anterior = null;//enlace para la cabera en y
        this.arriba = null;//enlace para moverse hacia arriba en el nodo matriz
        this.abajo = null;//enlace para moverse hacia abajo en el nodo matriz
        this.izquierda = null;//enlace para moverse hacia izquierda en el nodo matriz
        this.derecha = null;//enlace para moverse hacia derecha en el nodo matriz
        this.artista = artista
    }
}

class Cabeceras {
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    ordenar(nodo) {
        let aux = this.primero;
        while (aux != null) {
            if (aux.valor < nodo.valor) {
                aux = aux.siguiente;
            } else {
                if (aux == this.primero) {
                    nodo.siguiente = aux;
                    aux.anterior = nodo;
                    this.primero = nodo;
                    return;
                } else {
                    nodo.anterior = aux.anterior;
                    aux.anterior.siguiente = nodo;
                    nodo.siguiente = aux;
                    aux.anterior = nodo;
                    return;
                }
            }
        }
        this.ultimo.siguiente = nodo;
        nodo.anterior = this.ultimo;
        this.ultimo = nodo;
    }

    insertar(valor) {
        let nodo = new  NodoMatriz(valor, null, null, null)
        if (this.primero == null) {
            this.primero = this.ultimo = nodo;
            return;
        }
        this.ordenar(nodo);
    }

    busqueda(valor) {
        let temp = this.primero;
        while (temp != null) {
            if (temp.valor == valor) return temp;
            temp = temp.siguiente;
        }
        return null;
    }
}

class MatrizD {
    constructor() {
        this.lista_horizontal = new Cabeceras();
        this.lista_vertical = new Cabeceras();
    }

    insertar(valor, x, y, art) {
        let nodo_x = this.lista_horizontal.busqueda(x);
        let nodo_y = this.lista_vertical.busqueda(y);

        if (nodo_x == null && nodo_y == null) {
            this.caso1(valor, x, y, art);
        } else if (nodo_x == null && nodo_y != null) {
            this.caso2(valor, x, y);
        } else if (nodo_x != null && nodo_y == null) {
            this.caso3(valor, x, y, art);
        } else {
            this.caso4(valor, x, y, art);
        }
    }

    caso1(valor, x, y, art) {
        this.lista_horizontal.insertar(x);
        this.lista_vertical.insertar(y);

        let nodo_x = this.lista_horizontal.busqueda(x);
        let nodo_y = this.lista_vertical.busqueda(y);

        let nuevo = new  NodoMatriz(valor, x, y, art);
        nodo_x.abajo = nuevo;
        nuevo.arriba = nodo_x;

        nodo_y.derecha = nuevo;
        nuevo.izquierda = nodo_y;
    }

    caso2(valor, x, y, art) {
        this.lista_horizontal.insertar(x);

        let nodo_x = this.lista_horizontal.busqueda(x);
        let nodo_y = this.lista_vertical.busqueda(y);

        let agregado = false;

        let nuevo = new  NodoMatriz(valor, x, y, art);
        let aux = nodo_y.derecha;// nos movemos hacia la derecha una posicion
        let cabecera = 0;

        while (aux != null) {
            cabecera = aux.x;
            if (cabecera < x) { // 3 < 4
                aux = aux.derecha;
            } else {
                nuevo.derecha = aux;//aux toma valor de nodo(2)
                nuevo.izquierda = aux.izquierda;
                aux.izquierda.derecha = nuevo;
                aux.izquierda = nuevo;
                agregado = true;
                break;
            }
        }

        if (agregado == false) {
            aux = nodo_y.derecha;
            while (aux.derecha != null) {
                aux = aux.derecha;
            }
            nuevo.izquierda = aux;
            aux.derecha = nuevo;
        }

        nodo_x.abajo = nuevo;
        nuevo.arriba = nodo_x;
    }

    caso3(valor, x, y, art) {
        // solo existe la cabecera en x
        this.lista_vertical.insertar(y) // inserta la cabecera en y

        let nodo_x = this.lista_horizontal.busqueda(x);
        let nodo_y = this.lista_vertical.busqueda(y);

        let agregado = false;

        let nuevo = new  NodoMatriz(valor, x, y, art);//interno de matriz
        let aux = nodo_x.abajo; // obtenemos el primer nodo de la cabecera
        let cabecera = 0;

        while (aux != null && !agregado) {
            cabecera = aux.y;//1
            if (cabecera < y) {//1<2;2<2;3<2
                aux = aux.abajo;//aux-> nodo(valor:3, x:2, y:3)
            } else {
                nuevo.abajo = aux;
                nuevo.arriba = aux.arriba;
                aux.arriba.abajo = nuevo;
                aux.arriba = nuevo;
                agregado = true;
            }
        }

        if (!agregado) {
            aux = nodo_x.abajo;
            while (aux.abajo != null) {
                aux = aux.abajo;
            }
            aux.abajo = nuevo;
            nuevo.arriba = aux;
        }

        nodo_y.derecha = nuevo;
        nuevo.izquierda = nodo_y;
    }


    caso4(valor, x, y, art) {

        let nodo_x = this.lista_horizontal.busqueda(x);
        let nodo_y = this.lista_vertical.busqueda(y);

        let agregado = false;
        let nuevo = new  NodoMatriz(valor, x, y, art);
        let aux = nodo_y.derecha;
        let cabecera = 0;
        while (aux != null) {
            cabecera = aux.x;
            if (cabecera < x) {
                aux = aux.derecha;
            } else {
                nuevo.derecha = aux;
                nuevo.izquierda = aux.izquierda;
                aux.izquierda.derecha = nuevo;
                aux.izquierda = nuevo;
                agregado = true;
                break;
            }
        }
        if (agregado == false) {
            aux = nodo_y.derecha;
            while (aux.derecha != null) {
                aux = aux.derecha;
            }
            nuevo.izquierda = aux;
            aux.derecha = nuevo;
        }

        agregado = false;
        aux = nodo_x.abajo;
        cabecera = 0;

        while (aux != null && !agregado) {
            cabecera = aux.y;
            if (cabecera < y) {
                aux = aux.abajo;
            } else {
                nuevo.abajo = aux;
                nuevo.arriba = aux.arriba;
                aux.arriba.abajo = nuevo;
                aux.arriba = nuevo;
                agregado = true;
            }
        }

        if (!agregado) {
            aux = nodo_x.abajo;
            while (aux.abajo != null) {
                aux = aux.abajo;
            }
            aux.abajo = nuevo;
            nuevo.arriba = aux;
        }
    }

    imprimir_vertical(){
        let cabecera = this.lista_vertical.primero;
        let aux;
        while(cabecera != null){
            aux = cabecera.derecha;
            while(aux!=null){
                console.log("Valor:",aux.valor, "X:", aux.x, "Y:", numMes(aux.y), "artista:", aux.artista);
                aux = aux.derecha//iteraciones dentro de la matriz;
            }
            cabecera = cabecera.siguiente;//iteraciones de lista ordenada
        }
    }

    imprimir_horizontal(){
        let cabecera = this.lista_horizontal.primero;
        let aux;
        while(cabecera != null){
            aux = cabecera.abajo;
            while(aux!= null){
                console.log("Valor:",aux.valor, "X:", aux.x, "Y:", numMes(aux.y), "artista:", aux.artista);
                aux = aux.abajo;
            }
            cabecera = cabecera.siguiente;
        }
    }
}




let users = new listaUsuarios();
let arts = new Artistas();
let MusicaProgramada = new MatrizD();

//login
try{
     //login
     var cUs = document.getElementById("vistalog");
     cUs.addEventListener('submit', function(e){
         e.preventDefault();
 
         var formulario = new FormData(document.getElementById("formulario"));
         if(formulario.get("admon") != null){
             //admin log here
             if(formulario.get("user")== "EDD" && formulario.get("pass")== "123"){
                 mostrarcuatro();
             }else{
                 var ok = users.login(formulario.get("user"), formulario.get("pass"), true)
                 if(ok == true) {
                    console.log(ok)
                     mostrarcuatro();
                 }else{
                     alert("credenciales incorrectas");
                 }
             }
         }else{
             //user log here
             var ok = false; 
             ok = users.login(formulario.get("user"), formulario.get("pass"), false);
             if(ok == true){
                 alert("credenciales correctas")
             }else{
                 alert("credenciales incorrectas")
             }
 
         }
         document.getElementById("formulario").reset();
 
     })
}catch{
}


function mostraruno(){
    document.getElementById("uno").style.display = "block";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.body.style.backgroundColor = "black";
}

function mostrardos(){
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "block";
  document.getElementById("tres").style.display = "none";
  document.getElementById("cuatro").style.display = "none";
  document.body.style.backgroundColor = "cadetblue";

}

function mostrartres(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "block";
    document.getElementById("cuatro").style.display = "none";
    document.body.style.backgroundColor = "cadetblue";

}

function mostrarcuatro(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "block";

    document.body.style.backgroundColor = "white";
}





//pagina administrador
function cargarUsuarios(datas){

    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0;

        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                const name = element["name"]
                const dpi = element["dpi"]
                const user = element["username"]
                const pass = element["password"]
                const phone = element["phone"]
                const admin = element["admin"]

                if(name == undefined || dpi == undefined || user == undefined || pass == undefined || phone == undefined || admin == undefined){
                    error += 1;
                }else{
                    let nuevoUser = new Usuario(user, name, dpi, phone, pass, admin);
                    users.agregar(nuevoUser);
                }
            }catch{

            }
        }
        if(error>0){
            alert("existen errores en: "+ error + " datos de usuarios, no se añadieron")
        }
        
    }
    reader.readAsText(datas);
    console.log(users.mostrarTodo())

}

function cargarArtistas(datas){
    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0
        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                var name = element["name"]
                var age = element["age"]
                var lugar = element["country"]
                if(name == undefined || age == undefined || lugar == undefined){
                    error += 1;
                }else{

                    var nuevoArt = new Artista(name, age, lugar);
                    arts.agregarArtista(nuevoArt);
                }
            }catch{

            }
        }
        if (error > 0){
            alert("existen errores en: "+ error + " datos de artistas, no se añadieron")
        }
        
    }
    reader.readAsText(datas);

}

function cargarCanciones(datas){
    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0
        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                var art = element["artist"]
                var name = element["name"]
                var duration = element["duration"]
                var gender = element["gender"]
                if(art==undefined || name == undefined || duration == undefined || gender == undefined){
                    error += 1;
                }else{
                    var nuevaCancion = new Cancion(art, name, duration, gender);
                    arts.agregarCancion(art, nuevaCancion)
                }
            }catch{

            }
        }
        if (error > 0){
            alert("existen errores en: "+ error + " datos de artistas, no se añadieron")
        }
        
    }
    reader.readAsText(datas);

}

function cargarMusica(datas){
    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0
        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                var mes = element["month"];
                var dia = element["day"];
                var cancion = element["song"];
                var artista = element["artist"];
                if(artista==undefined || mes == undefined || dia == undefined || cancion == undefined){
                    error += 1;
                }else{

                    MusicaProgramada.insertar(cancion, dia, mesNum(mes), artista);

                }
            }catch{

            }
        }
        if (error > 0){
            alert("existen errores en: "+ error + " datos de artistas, no se añadieron")
        }
        
    }
    reader.readAsText(datas);

}

function cargarPodcast(datas){
    var reader = new FileReader();
    reader.onload = function(e){
        var contents = e.target.result;
        var json = JSON.parse(contents);
        var error = 0
        for (let index = 0; index < json.length; index++) {
            var element = json[index];
            try{
                var mes = element["name"]
                var dia = element["topic"]
                var cancion = element["song"]
                var artista = element["artist"]
                if(artista==undefined || mes == undefined || dia == undefined || cancion == undefined){
                    error += 1;
                }else{
                    var nuevaMusica = new nodoMusica(mes, dia, cancion, artista);
                    console.log(nuevaMusica.texto())
                    //agregar a musicaProgramada
                    //arts.agregarCancion(nuevaMusica)
                }
            }catch{

            }
        }
        if (error > 0){
            alert("existen errores en: "+ error + " datos de artistas, no se añadieron")
        }
        
    }
    reader.readAsText(datas);

}

function mesNum(mes){
    switch (mes) {
        case "January":
            return 1;
        case "February":
            return 2;
        case "March":
            return 3;
        case "April":
            return 4;
        case "May":
            return 5;
        case "June":
            return 6;
        case "July":
            return 7;
        case "Augost":
            return 8;
        case "September":
            return 9;
        case "October":
            return 10;
        case "November":
            return 11;
        case "December":
            return 12;
        default:
            break;
    }
}

function numMes(num){
    switch (num) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "Augost";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12: 
            return "December";
        default:
            break;
    }

}

function deselectFile(){
    var a = document.getElementById("fus");
    var b = document.getElementById("far")
    var c = document.getElementById("fmp")
    var d = document.getElementById("fpod")
    var e = document.getElementById("fcan")
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
    e.value = "";
    console.log(MusicaProgramada);

}

function crearunUsuario(){
    var usuario = document.getElementById("us").value;
    var nombre = document.getElementById("name").value;
    var dpi = document.getElementById("dpy").value;
    var fone = document.getElementById("fone").value;
    var pass = document.getElementById("password").value;
    if (usuario == "" || nombre == "" || dpi == "" || fone == "" || pass == ""){
        alert("no se puede crear el usuario, hay campos vacios")
    }else{
        var nuevoUsuario = new Usuario(usuario, nombre, dpi, fone, pass, false);
        console.log(nuevoUsuario.texto())
        users.agregar(nuevoUsuario);
        alert("usuario creado con exito")
        document.getElementById("us").value = "";
        document.getElementById("name").value = "";
        document.getElementById("dpy").value = "";
        document.getElementById("fone").value = "";
        document.getElementById("password").value = "";
    }
}