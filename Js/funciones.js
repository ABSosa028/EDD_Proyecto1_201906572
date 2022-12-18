class amigo{
    constructor(user){
        this.cual = user;
        this.next = null;
    }
}


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
            temp.next = nuevo;
        }
    }

    pop(){
        if(this.primero == null){
            alert("No hay elementos para eliminar");
        }else{
            if(this.primero == this.ultimo){
                this.primero = null;
                this.ultimo = null;
                return;
            }
            var temp = this.primero;
            while (temp.next != this.ultimo){
                temp = temp.next;
            }
            temp.next = null;
            this.ultimo = temp;
        }
    }

    buscarAmigo(user){
        //busqueda por nombre
        if(this.primero == null){
            return false;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.cual.usuario == user){
                    return true;
                }
                temp = temp.next;
            }
            return false;
        }
    }

    buscarAmigo2(user){
        //busqueda por objeto
        if(this.primero == null){
            return false;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.cual == user){
                    return true;
                }
                temp = temp.next;
            }
            return false;
        }
    }
}

class playList{
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
            nuevo.anterior = temp;
            this.primero.anterior = nuevo;
            nuevo.siguiente = this.primero;
        }
    }

    eliminarBusqueda(cancion){
        if(this.primero == null){
            alert("No hay elementos para eliminar");
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.cancion == cancion){
                    if(temp == this.primero){
                        this.primero = temp.siguiente;
                        this.ultimo.siguiente = this.primero;
                        this.primero.anterior = this.ultimo;
                        temp = null;
                        return;
                    }else if(temp == this.ultimo){
                        this.ultimo = temp.anterior;
                        this.primero.anterior = this.ultimo;
                        this.ultimo.siguiente = this.primero;
                        temp = null;
                        return;
                    }else{
                        temp.anterior.siguiente = temp.siguiente;
                        temp.siguiente.anterior = temp.anterior;
                        temp = null;
                        return;
                    }
                }
                temp = temp.siguiente;
            }
            alert("No se encontro la cancion");
        }
    }

}

class nodoPlay{
    constructor(canncion){
        this.cancion = canncion;
        this.siguiente = null;
        this.anterior = null;
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

    buscarBloqueado(user){
        if(this.primero == null){
            return false;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.cual == user){
                    return true;
                }
                temp = temp.siguiente;
            }
            return false;
        }
    }
}

class bloqueado{
    constructor(user){
        this.cual = user;
        this.siguiente = null;
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
        this.myplay = new playList();

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

    buscarUsuario(user){
        if(this.primero == null){
            return null;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.usuario == user){
                    return temp;
                }
                temp = temp.siguiente;
            }
            return null;
        }
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
        this.artista = artista;
        this.nombre = name;
        this.tiempo = duration;
        this.genero = gender;
        this.siguiente = null;
        this.anterior = null;
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
                return;
            }
            temp = temp.siguiente;
        }
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

    getCancion(nombreCancion, nombreArtista){
        var temp = this.primero;
        while(temp!=null){
            if(temp.nombre == nombreArtista){
                var tempCancion = temp.cabezaCancion;
                while(tempCancion != null){
                    if(tempCancion.nombre == nombreCancion){
                        return tempCancion;
                    }
                    tempCancion = tempCancion.siguiente;
                }
            }
            temp = temp.siguiente;
        }
        return null;
    }

    ordenamientoBurbujaArtistas(){
        var temp = this.primero;
        while(temp != null){
            var temp2 = temp.siguiente;
            while(temp2 != null){
                if(letratoNum(temp.nombre[0]) > letratoNum(temp2.nombre[0])){
                    var aux = temp;
                    temp = temp2;
                    temp2 = aux;
                }
                temp2 = temp2.siguiente;
            }
            temp = temp.siguiente;
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

        // d3.select("#lienzo3").graphviz()
        // .renderDot(codigodot)
    }
}

class PodCast{
    constructor(nombre, duracion, invitados, tema){
        this.nombre = nombre;
        this.duracion = duracion;
        this.invitados = invitados;
        this.tema = tema;
        this.izq = null;
        this.der = null;
    }
}

class PodCasts{
    constructor(){
        this.raiz = null;
    }

    agregar(nuevo){
        if(this.raiz == null){
            this.raiz = nuevo;
        }else{
            this.agregarNodo(this.raiz, nuevo);
        }
    }

    agregarNodo(raiz, nuevo){
        if(raiz.duracion > nuevo.duracion){
            if(raiz.izq == null){
                raiz.izq = nuevo;
            }else{
                this.agregarNodo(raiz.izq, nuevo);
            }
        }else{
            if(raiz.der == null){
                raiz.der = nuevo;
            }else{
                this.agregarNodo(raiz.der, nuevo);
            }
        }
    }

}


//declaracion de variables globales
let users = new listaUsuarios();
let arts = new Artistas();
let MusicaProgramada = new MatrizD();
let usuarioLog = null;

//quemado de usuarios masters
users.agregar(new Usuario("EDD", "Oscar Armin", 2654568452521, 1231234567, "123", true));
users.agregar(new Usuario("a", "Alan Barillas", 3032428560108, 58624710, "a", false));

//metodo de logueo
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
//mostrar contenedor con vista de home
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "black";
}
//mostrar contenedor con vista de login
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "cadetblue";

}
//mostrar contenedor con vista de registro
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "cadetblue";

}
//mostrar contenedor con vista administrador
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "white";
}
//mostrar contenedor con vista de musica
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "white";
}
//mostrar contenedor con vista de artistas
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "white";

}
//mostrar contenedor con vista de playlist
function vistaPlaylist(){
    dataPlay();
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "block";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "white";
}
//mostrar contenedor con vista de amigos
function vistaAmigos(){
    dataUsuarios();
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "white";

}

//mostrar contenedor con vista de bloqueados
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
    document.getElementById("vistaPodcast").style.display = "none";
    document.body.style.backgroundColor = "white";
}

function vistaPodcast(){
    //dataBloqueados();
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "none";
    document.getElementById("cuatro").style.display = "none";
    document.getElementById("vistaMusica").style.display = "none";
    document.getElementById("vistaPlaylist").style.display = "none";
    document.getElementById("vistaArtistas").style.display = "none";
    document.getElementById("vistaAmigos").style.display = "none";
    document.getElementById("vistaBloqueados").style.display = "none";
    document.getElementById("vistaPodcast").style.display = "block";

    document.body.style.backgroundColor = "white";
}

//pagina administrador

//cargar usuarios
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


}
//cargar artistas
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
//cargar canciones
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
//funcion para cargar la musica programada
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
//funcion para cargar el archivo de podcast
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

//funcion para convertir el nombre del mes a su numero
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

//funcion para convertir el numero del mes a su nombre
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

//deseleccionar los archivos de los input file
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

}

//registro de un usuario
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
        users.agregar(nuevoUsuario);
        alert("usuario creado con exito")
        document.getElementById("us").value = "";
        document.getElementById("name").value = "";
        document.getElementById("dpy").value = "";
        document.getElementById("fone").value = "";
        document.getElementById("password").value = "";
    }
}

//mostrar toda la musica falta
function dataArtistas(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("hola");
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
        c +=   "<button type=\"button\" class=\"btn btn-primary\" onclick=\"nuevoPlay('"+aux.nombre+"','"+aux2.nombre+"')\">Añadir PlayList</button>";


        c +=   "</div>";
        c +=   "</div>";
        c +=   "<br>";
        c +=   "<br>";
        aux = aux.siguiente;
        }
        aux2 = aux2.siguiente;
    }
    b.innerHTML = c;

}

//mostrar musica por artistas listo
function dataAtt(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("musicaxart");
    let c = ""
    let aux2 = arts.primero;

    while (aux2 != null){
        let pub = 0;
        let aux = aux2.cabezaCancion;
        c+= "<div class = \"grid-container\">";
        c +=   "<div class=\"card\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/200/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+aux2.nombre+"</h5>";
            c +=   "<h5 class=\"card-title\">"+aux2.edad+"</h5>";
            c +=   "<p class=\"card-text\">"+aux2.lugar+"</p>";
            c +=  "<i class=\"bi bi-play-fill\"></i>"
            c +=   "</div>";
            c +=   "</div>";
        

        while (aux != null){
            pub += 1;
            c +=   "<div class=\"grid-item\">";
            c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\">"+aux.nombre+"</h5>";
            c +=   "<p class=\"card-text\">"+aux.tiempo+"</p>";
            c +=   "<p class=\"card-text\">"+aux.artista+"</p>";
            c +=   "<p class=\"card-text\"><h6>"+aux.genero+"<h6></p>";
            c +=   "</div>";
            c +=   "</div>";


            aux = aux.siguiente;
        }
        if (pub == 0){
            c +=   "<div class=\"grid-item\">";
            c +=   "<div class=\"card-img-top\"><br><img ></div>";
            c +=   "<div class=\"card-body\">";
            c +=   "<h5 class=\"card-title\"> Sin Canciones </h5>";
            c +=   "</div>";
            c +=   "</div>";
        }
        c+= "</div>";
        c+= "<br>";
        c+= "<br>";
        aux2 = aux2.siguiente;

    }
    b.innerHTML = c;

}

//mostrar usuarios listo
function dataUsuarios(){
    //vistadetodos
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let b = document.getElementById("vistadetodos");
    let c = ""
    let aux = users.primero;
        c += "<center>"
        c += "<h1>Usuarios</h1>"
        c += "</center>"
        c += "<div class = \"grid-container\">";
        while (aux != null){
            if(aux != usuarioLog){
                let amigaso = usuarioLog.amix.buscarAmigo2(aux);
                let bloqueo = usuarioLog.bloq.buscarBloqueado(aux);
                if(amigaso == false && bloqueo == false ){
                    c +=   "<div class=\"grid-item card\">";
                    c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
                    c +=   "<div class=\"card-body\">";
                    c +=   "<h5 class=\"card-title\">"+aux.nombre+"</h5>";
                    c +=   "<p class=\"card-text\"><h6>"+aux.usuario+"</h6></p>";
                    c +=   "<button type=\"button\" class=\"btn btn-primary\" onclick=\"añadir('"+aux.usuario+"')\">Añadir</button>"
                    c +=   "<button type=\"button\" class=\"btn btn-danger\" onclick=\"bloquear('"+aux.usuario+"')\">Bloquear</button>"
                    c +=   "</div>";
                    c +=   "</div>";
                }
            }
            aux = aux.siguiente;
        }
        c+= "</div>";
        c+= "<br>";
        c+= "<br>";
    b.innerHTML = c;


}
//mostrar amigos listo
function dataAmigos(){
    //vistadetodos
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("vistadeamigos");
    let c = ""
    let aux = usuarioLog.amix.primero;
    c += "<center>"
    c += "<h1>Amigos</h1>"
    c += "</center>"
    c += "<div class = \"grid-container\">";
    while (aux != null){
        if(aux.cual != usuarioLog){
                c +=   "<div class=\"grid-item card\">";
                c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
                c +=   "<div class=\"card-body\">";
                c +=   "<h5 class=\"card-title\">"+aux.cual.nombre+"</h5>";
                c +=   "<p class=\"card-text\"><h6>"+aux.cual.usuario+"</h6></p>";
                c +=   "</div>";
                c +=   "</div>";
        }
        aux = aux.next;
    }
    c+= "</div>";
    c+= "<br>";
    c+= "<br>";
    b.innerHTML = c;

}

//añadir a vista de bloqueados
function dataBloqueados(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("bloqueox2");
    let c = ""
    let aux = usuarioLog.bloq.primero;
    c += "<center>"
    c += "<h1>Usuarios Bloqueados</h1>"
    c += "</center>"
    c += "<div class = \"grid-container\">";
    while (aux != null){
        if(aux.cual != usuarioLog){
                c +=   "<div class=\"grid-item card\">";
                c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/180/320?random="+a[Math.floor(Math.random() * a.length)]+"\"></div>";
                c +=   "<div class=\"card-body\">";
                c +=   "<h5 class=\"card-title\">"+aux.cual.nombre+"</h5>";
                c +=   "<p class=\"card-text\"><h6>"+aux.cual.usuario+"</h6></p>";
                c +=   "</div>";
                c +=   "</div>";
        }
        aux = aux.siguiente;
    }
    c+= "</div>";
    c+= "<br>";
    c+= "<br>";
    b.innerHTML = c;

}

function dataPlay(){
    let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    let b = document.getElementById("vistadetuplay");
    let c = ""
    let aux = usuarioLog.myplay.primero;
    c += "<center>"
    c += "<h1>Mi PlayList</h1>"
    c += "</center>"
    c += "<div id = \"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">";
    c += "<div class=\"carousel-inner\">";
    if (aux != null){
        c += "<div class=\"carousel-item active\">";
        c += "<img class = \"d-block w-100\" src=\"https://picsum.photos/1440/974?random="+a[Math.floor(Math.random() * a.length)]+"\">";
        c += "<p>"+aux.cancion.nombre+"</p>";
        c += "<p>"+aux.cancion.tiempo+"</p>";
        c += "</div>"
        aux = aux.siguiente;
    }else{
        c += "<div class=\"carousel-item active\">";
       
        c += "<p style=\"color=\"Red\"; \"><h1>Playlist Vacia</h1></p>";
        c += "</div>";
    }
    while (aux != null && aux != usuarioLog.myplay.primero){
        c += "<div class=\"carousel-item \">";
        c += "<img class = \"d-block w-100 card\" src=\"https://picsum.photos/1440/974?random="+a[Math.floor(Math.random() * a.length)]+"\">";
        c += "<p>"+aux.cancion.nombre+"</p>";
        c += "<p>"+aux.cancion.tiempo+"</p>";
        c += "</div>"
        aux = aux.siguiente;
    }
    c+= "</div>";
    c+= "<a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">";
    c+= "<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>";
    c+= "<span class=\"sr-only\">Previous</span>";
    c+= "</a>";
    c+= "<a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">";
    c+= "<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>";
    c+= "<span class=\"sr-only\">Next</span>";
    c+= "</a>";
    c+= "</div>";
    c+= "<br>";
    c+= "<br>";
    b.innerHTML = c;

}

function dataPodcast(){
}


//añadir un amigo listo
function añadir(aux){

    let nuevoAmigo = users.buscarUsuario(aux);
    if (nuevoAmigo != null){
        let existe = usuarioLog.amix.buscarAmigo2(nuevoAmigo);
        if (existe == false){
            usuarioLog.amix.push(new amigo(nuevoAmigo));
        }else{
            alert("Ya es tu amigo")
        }
    }
    vistaAmigos();
}

//bloquear un usuario listo
function bloquear(aux){
    let nuevoBloqueado = users.buscarUsuario(aux);
    if (nuevoBloqueado != null){
        let existe = usuarioLog.bloq.buscarBloqueado(nuevoBloqueado);
        if (existe == false){
            usuarioLog.bloq.encolar(new bloqueado(nuevoBloqueado));
        }else{
            alert("Ya lo tienes bloqueado")
        }
    }
    vistaAmigos();
}

//eliminar un amigo listo
function deleteFriend(){
    usuarioLog.amix.pop();
    vistaAmigos();
}

//agregar a playlist listo
function nuevoPlay(cancion, artista){
    let cancioncita = arts.getCancion(cancion, artista);
    if (cancioncita != null){
        usuarioLog.myplay.push(new nodoPlay(cancioncita));
    }
}

function deleteBlock(){
    usuarioLog.bloq.desencolar();
    vistaBloqueados();
}

function nuevoPod(){
    let nombre = document.getElementById("nombrePod").value;
    let descripcion = document.getElementById("descripcionPod").value;
    let duracion = document.getElementById("durapod").value;
    let invitados = document.getElementById("invitadospod").value;
    let aux = new PodCast(nombre, descripcion, categoria, imagen);
    usuarioLog.pod.agregar(aux);
    vistaPodcast();
}

//metodo extra para ver orden y darle ordenamiento a los artistas
function letratoNum(letra){
    switch (letra) {
        case "a" || "A":
            return 1;
        case "b" || "B":
            return 2;
        case "c" || "C":
            return 3;
        case "d" || "D":
            return 4;
        case "e" || "E":
            return 5;
        case "f" || "F":
            return 6;
        case "g" || "G":
            return 7;
        case "h" || "H":
            return 8;
        case "i" || "I":
            return 9;
        case "j" || "J":
            return 10;
        case "k" || "K":
            return 11;
        case "l" || "L":
            return 12;
        case "m" || "M":
            return 13;
        case "n" || "N":
            return 14;
        case "ñ" || "Ñ":
            return 15;
        case "o" || "O":
            return 16;
        case "p" || "P":
            return 17;
        case "q" || "Q":
            return 18;
        case "r" || "R":
            return 19;
        case "s" || "S":
            return 20;
        case "t" || "T":
            return 21;
        case "u" || "U":
            return 22;
        case "v" || "V":
            return 23;
        case "w" || "W":
            return 24;
        case "x" || "X":
            return 25;
        case "y" || "Y":
            return 26;
        case "z" || "Z":
            return 27;
        default:
            return 0;
    }
}

function alpha(){
    alert("chilero tu orden alphabetiko")
    console.log(arts);
    arts.ordenamientoBurbujaArtistas();
    console.log(arts);
    vistaArtistas();
}

function disalpha(){
    alert("chilero tu orden disalphabetiko")
}

