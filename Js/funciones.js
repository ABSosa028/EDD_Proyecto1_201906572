class amigos{
    constructor(){
        this.primero = null;
        this.ultimo = null;
       
    }

    push(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = nuevo;
        }else{
            var temp = this.ultimo;
            this.ultimo = nuevo;
            temp.siguiente = nuevo;
        }
    }

    pop(){
        if(this.primero == null){
            alert("No hay elementos para eliminar");
        }else{
            var temp = this.primero;
            while (temp.siguiente != this.ultimo){
                temp = temp.siguiente;
            }
            temp.siguiente = null;
            this.ultimo = temp;
        }
    }
}

class bloqueados{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    encolar(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = nuevo;
        }else{
            var temp = this.ultimo;
            this.ultimo = nuevo;
            temp.siguiente = nuevo;
        }
    }

    desencolar(){
        if(this.primero == null){
            alert("No hay elementos para eliminar");
        }else{
            var temp = this.primero;
            this.primero = temp.siguiente;
            temp = null;
        }
    }
}

class Usuario{
    constructor(user, name, code, cel, pass, tp ){
        this.usuario = user;
        this.nombre = name;
        this.dpi = code;
        this.telefono = cel;
        this.contraseña = pass;
        this.tipo = tp;
        this.siguiente = null;
        this.bloq = new bloqueados();
        this.amix = new amigos();
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
            return null;
        }
        if(this.primero == null){
            return null;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.usuario == user && pass == temp.contraseña){
                    if(temp.tipo == tipo){
                        return temp;
                    }else{
                        return null;
                    }
                }
                temp = temp.siguiente;
            }
            return null;
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
        if(cabecera == null){
            console.log("No hay canciones");
            return;
        }
        console.log("Cabecera:", cabecera.valor)
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

    graficar_matriz(){
        var codigodot = "digraph G{bgcolor=none \n graph[size = \"11.70,6.25\" ]\n   nodesep = 0.6 edge[dir = \"both\"] \nlabel=\" MUSICA PROGRAMADA \";\n node [shape=box];\n node[style=filled];\n";        
        let hor = this.lista_horizontal.primero;
        let ver = this.lista_vertical.primero;

        let aux1;
        let aux2;
        codigodot = codigodot.concat ("a[label = \"MD\" fillcolor=red];\n");
        var rank = "{rank = same; a;";
        while(hor != null){
            codigodot = codigodot.concat(hor.valor + "[label = \"" + hor.valor + "\" fillcolor=white];\n");
            rank = rank.concat(hor.valor + ";");
            hor = hor.siguiente;
        }
        rank = rank.concat("}\n");
        codigodot = codigodot.concat(rank);
        hor = this.lista_horizontal.primero;
        codigodot = codigodot.concat ("a ->");
        while(hor != null){
            aux1 = hor.siguiente;
            if(aux1 != null){
                codigodot = codigodot.concat (hor.valor + "->" + aux1.valor + ";");
            }
            hor = hor.siguiente;t     
        }
        codigodot = codigodot.concat("\n");
        while(ver != null){
            codigodot = codigodot.concat(numMes(ver.valor) + "[label = \"" + numMes(ver.valor) +"\" fillcolor=pink];\n");

            ver = ver.siguiente; 
        }

        ver = this.lista_vertical.primero;
        codigodot = codigodot.concat ("a ->");
        while(ver != null){
            aux2 = ver.siguiente;
            if(aux2 != null){
                codigodot = codigodot.concat (numMes(ver.valor) + "->" + numMes(aux2.valor) + ";");
            }
            ver = ver.siguiente;
        }
        codigodot = codigodot.concat("\n");
                
        ver = this.lista_vertical.primero;
        while(ver != null){
            var rank2 = "{rank = same; " + numMes(ver.valor) + ";";
            aux1 = ver.derecha;
            codigodot = codigodot.concat(numMes(aux1.y));
            while(aux1 != null){
                rank2 = rank2.concat(aux1.valor + ";");
                codigodot = codigodot.concat("->" + aux1.valor );
                aux1 = aux1.derecha;
            }
            codigodot = codigodot.concat("[constraint=false]");
            codigodot = codigodot.concat(";\n");
            rank2 = rank2.concat("}\n");
            codigodot = codigodot.concat(rank2);
            ver = ver.siguiente;
        }

        hor = this.lista_horizontal.primero;
        while(hor != null){
            var rank3 = "{rank = same; " + hor.valor + ";";
            aux1 = hor.abajo;
            codigodot = codigodot.concat(aux1.x);
            while(aux1 != null){
                rank3 = rank3.concat(aux1.valor + ";");
                codigodot = codigodot.concat("->" + aux1.valor );
                aux1 = aux1.abajo;
            }
            codigodot = codigodot.concat(";\n");
            rank3 = rank3.concat("}\n");
            hor = hor.siguiente;
        }

        codigodot = codigodot.concat("\n}");
        console.log(codigodot);

        // d3.select("#lienzo3").graphviz()
        // .renderDot(codigodot)
    }
}

let users = new listaUsuarios();
let arts = new Artistas();
let MusicaProgramada = new MatrizD();
let usuarioLog = null;

users.agregar(new Usuario("EDD", "Oscar Armin", 2654568452521, 1231234567, "123", true));
users.agregar(new Usuario("a", "Alan Barillas", 3032428560108, 58624710, "a", false));

//login
try{
     //login
     var cUs = document.getElementById("vistalog");
     cUs.addEventListener('submit', function(e){
         e.preventDefault();
         dataArtistas();
         dataAtt();
        
         var formulario = new FormData(document.getElementById("formulario"));
         if(formulario.get("admon") != null){
             //admin log here
       
                 var ok = users.login(formulario.get("user"), formulario.get("pass"), true)
                 if(ok != null) {
                    usuarioLog = ok;
                     mostrarcuatro();
                 }else{
                     alert("credenciales incorrectas");
                 }

         }else{
             //user log here
             var ok = null; 
             ok = users.login(formulario.get("user"), formulario.get("pass"), false);
             if(ok != null){
                usuarioLog = ok;
                vistaMusica();
             }else{
                 alert("credenciales incorrectas")
             }
 
         }
         document.getElementById("formulario").reset();
 
     })
}catch{
    alert("error")
}

function mostraruno(){
    document.getElementById("uno").style.display = "block";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";
    document.body.style.backgroundColor = "black";
}

function mostrardos(){
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "block";
  document.getElementById("tres").style.display = "none";
  document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";
    document.body.style.backgroundColor = "cadetblue";

}

function mostrartres(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "block";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";
    document.body.style.backgroundColor = "cadetblue";

}

function mostrarcuatro(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "block";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";
    document.body.style.backgroundColor = "white";
}

function vistaMusica(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "block";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";

    document.body.style.backgroundColor = "white";
}

function vistaArtistas(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "block";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";

    document.body.style.backgroundColor = "white";

}

function vistaPlaylist(){
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "block";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";

    document.body.style.backgroundColor = "white";
}

function vistaAmigos(){
    dataAmigos();
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "block";
    document.getElementById("vistaBloqueados").style.display = "none";

    document.body.style.backgroundColor = "white";

}

function vistaBloqueados(){
    dataBloqueados();
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "block";
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
        case "August":
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


    console.log(MusicaProgramada.graficar_matriz());
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


function dataArtistas(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("hola");
    console.log(b);
    let c = ""
    let aux2 = arts.primero;
    while (aux2 != null){
        let aux = aux2.cabezaCancion;
        while (aux != null){


        c +=   "<div class=\"card\">";
        c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
        c +=   "<div class=\"card-body\">";
        c +=   "<h5 class=\"card-title\">"+aux.nombre+"</h5>";
        c +=   "<p class=\"card-text\">"+aux.genero+"</p>";
        c +=   "<p class=\"card-text\">"+aux2.nombre+"</p>";
        c +=  "<i class=\"bi bi-play-fill\"></i>"

        c +=   "</div>";
        c +=   "</div>";
        c +=   "<br>";
        c +=   "<br>";
        aux = aux.siguiente;
        }
        aux2 = aux2.siguiente;
    }
    b.innerHTML = c;
    console.log(c)
}

function dataAtt(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("musicaxart");
    let c = ""
    let aux2 = arts.primero;

    while (aux2 != null){
        let pub = 0;
        let aux = aux2.cabezaCancion;
        c+= "<div class = \"card-columns\">";
        c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/243/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+aux2.nombre+"</h5>";
            c +=   "<h5 class=\"card-title\">"+aux2.edad+"</h5>";
            c +=   "<p class=\"card-text\">"+aux2.lugar+"</p>";
            c +=  "<i class=\"bi bi-play-fill\"></i>"
            c +=   "</div>";
            c +=   "</div>";
        

        while (aux != null){
            pub += 1;
            c +=   "<div class=\"scroll_horizontal\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/243/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+aux.nombre+"</h5>";
            c +=   "<p class=\"card-text\">"+aux.tiempo+"</p>";
            c +=   "<p class=\"card-text\">"+aux.artista+"</p>";
            c +=   "<p class=\"card-text\">"+aux.genero+"</p>";
            c +=  "<i class=\"bi bi-play-fill\"></i>"
            c +=   "</div>";
            c +=   "</div>";


            aux = aux.siguiente;
        }
        if (pub == 0){
            c +=   "<div class=\"scroll_horizontal\">";
            c +=   "<div class=\"card-img-top\"><br><img ></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\"> Sin Canciones </h5>";
            c +=  "<i class=\"bi bi-play-fill\"></i>"
            c +=   "</div>";
            c +=   "</div>";
        }
        c+= "</div>";
        c+= "<br>";
        c+= "<br>";
        aux2 = aux2.siguiente;

    }
    b.innerHTML = c;
    console.log(c)
}

function dataAmigos(){

}

function dataBloqueados(){

}


/*
        a.forEach(element => { 
            c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+element+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">Card title</h5>";
            c +=   "<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>";
            c +=   "</div>";
            c +=   "</div>";
            c +=   "<br>";
            c +=   "<br>";

    });
    b.innerHTML = c;
}



}*/