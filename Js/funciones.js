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
        if(this.primero = null){
            this.primero = nuevo
            this.ultimo = nuevo
        }else{
            var temp = this.ultimo
            this.ultimo = nuevo
            temp.siguiente = nuevo
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
        if(this.primero = null){
            this.primero = nuevo;
        }else{
            //verificar que no existe
            var ok = true;
            var ver = this.primero;
            while(ver != null){
                if(ver.nombre = nuevo.nombre){
                    ok = false
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
            }else{
                alert("Artista repetida");
            }

        }
    }

    agregarCancion(nombreArtista, cancion){
        var agg = false;
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
                agg = true
                console.log("agregado")
            }else{
                temp = temp.siguiente
            }
        }
        if(agg == false){
            console.log("no agregado")
        }
    }
}


class nodoMusica{
    constructor(mes, dia, cancion, artista){
        this.mes = mes
        this.dia = dia
        this.cancion = cancion
        this.artista = artista
        this.up = null
        this.down = null
        this.left = null
        this.right = null

    }
    
    texto(){
        var a = this.mes + " " + this.dia+ " " + this.cancion + " " + this.artista;
        return a;
    }
}

class matrizDisperza{
    constructor(){
        this.raiz = null;
    }


}


var users = new listaUsuarios();
var arts = new Artistas();
var MusicaProgramada = new matrizDisperza();

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
                var name = element["name"]
                var dpi = element["dpi"]
                var user = element["username"]
                var pass = element["password"]
                var phone = element["phone"]
                var admin = element["admin"]

                if(name == undefined || dpi == undefined || user == undefined || pass == undefined || phone == undefined || admin == undefined){
                    error += 1;
                }else{
                    var nuevoUser = new Usuario(user, name, dpi, phone, pass, admin);
                    console.log(nuevoUser.texto());
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
                    console.log(nuevoArt.texto())
                    arts.agregarArtista(nuevoArt)
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
                    console.log(nuevaCancion.texto())
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