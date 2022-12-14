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
        if(this.primero = null){
            return false;
        }else{
            var temp = this.primero;
            while (temp != null){
                if(temp.usuario == user && pass== temp.contraseña){
                    if(temp.tipo == tipo){
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

class NodoMatriz{
    constructor(dia, mes, cancion, artista) {
        this.next = null;
        this.prev = null;
        this.up = null;
        this.down = null;

        this.x = dia;
        this.y = mes;
        this.obj = cancion;
        this.art = artista
    }
}

class NodoHeader{
    constructor(pos) {
        this.next = null;
        this.prev = null;

        this.access = null;

        this.pos = pos;
    }

    getMes(){
        switch (this.pos) {
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
            case "Octubre":
                return 10;
            case "November":
                return 11;
            case "December":
                return 12;
            default:
                break;
        }
    }
}

class matrizDisperza{
    constructor(){
        this.colsList = null;
        this.rowsList = null;
    }

    insertar(x, y, obj, art) {
        let cell = new NodoMatriz(x, y, obj, art);

        let columna = this.colsList.getHeader(y);
        if (columna == null) {
            columna = new NodoHeader(y);
            this.colsList.setHeader(columna);
            columna.access = cell;
        } else if (x < columna.access.x) {
            cell.down = columna.access;
            columna.access.up = cell;
            columna.access = cell;
        } else {
            let aux = columna.access;
            while (aux.down != null) {
                if (x < aux.down.x) {
                    cell.down = aux.down;
                    aux.down.up = cell;
                    aux.down = cell;
                    cell.up = aux;
                    break;
                }
                aux = aux.down;
            }

            if (aux.down == null) {
                aux.down = cell;
                cell.up = aux;
            }
        }

        let row = this.rowsList.getMes(x);
        if (row == null) {
            row = new NodoHeader(x);
            this.rowsList.setMes(row);
            row.access = cell;
        } else if (y < row.access.y) {
            cell.next = row.access;
            row.access.prev = cell;
            row.access = cell;
        } else {
            let aux = row.access;
            while (aux.next != null) {
                if (y < aux.next.y) {
                    cell.next = aux.next;
                    aux.next.prev = cell;
                    aux.next = cell;
                    cell.prev = aux;
                    break;
                }
                aux = aux.next;
            }

            if (aux.next == null) {
                aux.next = cell;
                cell.up = aux;
            }
        }
    }

    exportRender() {
        console.log(this.configraph());
        d3.select("#lienzo").graphviz()
        .width(900)
        .height(500)
        .renderDot(this.configraph())
    }


    configraph() {
        let xela = "";
        xela += "digraph G{ node[shape=box style=filled]\n" + "subgraph cluster_p{\n";
        xela += 'label = "Matriz DISPERSA"' + 'edge[dir = "both"];\n';

        xela += this.nodoX();
        xela += this.ColbyR();
        xela += this.nodoY();
        xela += this.RowsbyR();



        xela += this.renderNodes();

        xela += this.graphRanks();




        xela += "}}";
        return xela.toString();
    }

    nodoX() {
        let xela = "";
        let auxc = this.colsList.head;
        xela += "Mt -> C";
        xela += auxc.pos;
        xela += ";\n";

        while (auxc != null) {
            xela += "C";
            xela += auxc.pos;
            xela += "[group =";
            xela += auxc.pos;
            xela += ", fillcolor=antiquewhite2 ];\n";

            if (auxc.next != null) {
                xela += "C";
                xela += auxc.pos;
                xela += " -> C";
                xela += auxc.next.pos;
                xela += ";\n";
            }
            auxc = auxc.next;
        }
        auxc = this.colsList.head;
        xela += "{ rank = same; Mt;";

        while (auxc != null) {
            xela += "C";
            xela += auxc.pos;
            xela += ";";

            auxc = auxc.next;
        }
        xela += "}\n";

        return xela.toString();
    }

    nodoY() {
        let xela = "";

        let auxr = this.rowsList.head;
        xela += "Mt -> F";
        xela += auxr.pos;
        xela += ";\n";

        while (auxr != null) {
            xela += "F";
            xela += auxr.pos;

            xela += "[group=1, fillcolor=antiquewhite2 ];\n";

            if (auxr.next != null) {
                xela += "F";
                xela += auxr.pos;
                xela += " -> F";
                xela += auxr.next.pos;
                xela += ";\n";
            }
            auxr = auxr.next;
        }
        return xela.toString();
    }

    renderNodes() {
        let xela = "";
        let auxc = this.colsList.head;
        while (auxc != null) {
            let aux = auxc.access;
            while (aux != null) {
                xela += "X";
                xela += aux.x;
                xela += "Y";
                xela += aux.y;
                xela += '[label="';
                xela += aux.obj;
                xela += '", group=';
                xela += aux.y;
                xela += "];\n";

                aux = aux.down;
            }
            auxc = auxc.next;
        }
        return xela.toString();
    }

    ColbyR() {
        let xela = "";
        let xela2 = "";
        let auxc = this.colsList.head;
        while (auxc != null) {
            if (auxc.access != null) {
                xela += "C";
                xela += auxc.pos;
                xela += " -> ";
                xela += "X";
                xela += auxc.access.x;
                xela += "Y";
                xela += auxc.access.y;
                xela += ";\n";
            }
            let aux = auxc.access;
            while (aux != null) {
                if (aux.down != null) {
                    xela2 += "X";
                    xela2 += aux.x;
                    xela2 += "Y";
                    xela2 += aux.y;
                    xela2 += " -> ";
                    xela2 += "X";
                    xela2 += aux.down.x;
                    xela2 += "Y";
                    xela2 += aux.down.y;
                    xela2 += ";\n";
                }
                aux = aux.down;
            }
            auxc = auxc.next;
        }
        xela += xela2;
        return xela.toString();
    }

    RowsbyR() {
        let xela = "";
        let xela2 = "";
        let auxr = this.rowsList.head;
        while (auxr != null) {
            if (auxr.access != null) {
                xela += "F";
                xela += auxr.pos;
                xela += " -> ";
                xela += "X";
                xela += auxr.access.x;
                xela += "Y";
                xela += auxr.access.y;
                xela += ";\n";
            }
            let aux = auxr.access;
            while (aux != null) {
                if (aux.next != null) {

                    xela2 += "X";
                    xela2 += aux.x;
                    xela2 += "Y";
                    xela2 += aux.y;
                    xela2 += " -> ";
                    xela2 += "X";
                    xela2 += aux.next.x;
                    xela2 += "Y";
                    xela2 += aux.next.y;
                    xela2 += ";\n";
                }
                aux = aux.next;
            }
            auxr = auxr.next;
        }
        xela += xela2;
        return xela.toString();
    }

    graphRanks() {
        let xela = "";
        let auxr = this.rowsList.head;
        while (auxr != null) {
            xela += "{ rank = same; F";
            xela += auxr.pos;
            xela += ";";

            let aux = auxr.access;
            while (aux != null) {
                xela += "X";
                xela += aux.x;
                xela += "Y";
                xela += aux.y;
                xela += ";";

                aux = aux.next;
            }
            xela += "}\n";

            auxr = auxr.next;
        }
        return xela.toString();
    }

}


class Header {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head == null;
    }

    getHeader(pos) {
        let aux = this.head;
        while (aux != null) {
            if (aux.pos == pos) return aux;
            aux = aux.next;
        }
        return null;
    }

    getMes(mes){
        let aux = this.head;
        while(aux != null){
            if(aux.pos == pos){
                return aux;
            }
            aux = aux.next;
        }
    }

    setHeader(node) {
        if (this.isEmpty()) {
            this.head = node;
        } else if (node.pos < this.head.pos) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            let aux = this.head;
            while (aux.next != null) {
                if (node.pos < aux.next.pos) {
                    node.next = aux.next;
                    aux.next.prev = node;
                    node.prev = aux;
                    aux.next = node;
                    break;
                }
                aux = aux.next;
            }

            if (aux.next == null) {
                aux.next = node;
                node.prev = aux;
            }
        }
    }


    setMes(node){
        if(this.isEmpty()){
            this.head = node;
        }else{
            var temp = this.head;
            if(this.head.getMes() > node.getMes()){
                this.head = node;
                node.next = temp;
                temp.prev = node;
                return;
            }
            while(temp.next != null){
                if (temp.getMes()> node.getMes()){      
                    temp = temp.prev;
                    var aux = temp.next;
                    temp.next = node;
                    node.prev = temp;
                    node.next = aux;
                    aux.prev = node;
                    return;
                }
                temp = temp.next;
            }
            temp.next = node;
            node.prev = temp;
            return;
        }

    }



}



function iniciar(){

}


let users = new listaUsuarios();
let arts = new Artistas();
const MusicaProgramada = new matrizDisperza();

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
                 if(ok = true) {
                     mostrarcuatro();
                 }else{
                     alert("credenciales incorrectas");
                 }
             }
         }else{
             //user log here
             var ok = users.login(formulario.get("user"), formulario.get("pass"), false)
             if(ok == true){
                 alert("credenciales correctas")
             }else{
                 alert("credenciales incorrectas")
             }
 
         }
 
 
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
                var mes = element["month"]
                var dia = element["day"]
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
    console.log(arts.mostrarTodo());


}