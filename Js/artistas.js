class Artista{
    constructor(name, age, contry){
        this.nombre = name
        this.edad = age
        this.lugar = contry
        this.cabezaCancion = null
        this.siguiente = null
        this.anterior = null
    }

}

class Cancion{
    constructor(name, duration, gender){
        this.nombre = name
        this.tiempo = duration
        this.genero = gender
        this.siguiente = null
        this.anterior = null
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
            }else{
                temp = temp.siguiente
            }
        }
    }
}


try{
    window.onload = function(){
        //carga archivos
        var cargaart = document.getElementById('lienzoart');
        cargaart?.addEventListener('submit', function(e){
        e.preventDefault();
        alert("hola2");
    })


        
    };

}catch{

}
